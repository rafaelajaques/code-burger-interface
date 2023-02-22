import React, { useState, useEffect } from 'react';
import ProductsLogo from '../../assets/products-logo.svg';
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './style';
import api from '../../services/api';
import CardProducts from '../../components/CardProducts';

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadProducts();
    loadCategories();
  }, []);

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
        {products && products.map((product) => <CardProducts key={product.id} product={product} />)}
      </ProductsContainer>
    </Container>
  );
}

export default Products;
