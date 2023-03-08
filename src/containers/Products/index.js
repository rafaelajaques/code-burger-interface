/* eslint-disable no-restricted-globals */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsLogo from '../../assets/products-logo.svg';
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './style';
import api from '../../services/api';
import { CardProducts } from '../../components';
import formatCurrency from '../../utils/formatCurrency';

export function Products() {
  const { state } = useLocation();

  let categoryId = 0;
  if (state?.categoryId) {
    categoryId = state.categoryId;
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products');

      const newProducts = allProducts.map((product) => ({
        ...product,
        formatedPrice: formatCurrency(product.price),
      }));

      setProducts(newProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFiltredProducts(products);
    } else {
      const newFiltredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );

      setFiltredProducts(newFiltredProducts);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo da home" />
      <CategoriesMenu>
        {categories &&
          // eslint-disable-next-line react/button-has-type
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filtredProducts &&
          filtredProducts.map((product) => <CardProducts key={product.id} product={product} />)}
      </ProductsContainer>
    </Container>
  );
}
