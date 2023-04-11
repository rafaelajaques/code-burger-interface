/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import ReactSelect from 'react-select';

import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from './style';
import api from '../../../services/api';
import { ErrorMessage } from '../../../components';

function EditProduct() {
  const [fileName, setFileName] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool(),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('offer', data.offer);

    await toast.promise(api.put(`products/${state.id}`, productDataFormData), {
      pending: 'Editando novo produto',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto. Tente novamente!',
    });

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} defaultValue={state.name} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} defaultValue={state.price} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => setFileName(value.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={state.category}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Escolha a categoria"
                defaultValue={state.category}
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input type="checkbox" {...register('offer')} defaultChecked={state.offer} />
          <Label>Produto em Oferta?</Label>
        </ContainerInput>
        <ButtonStyles>Editar Produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default EditProduct;

/*
Input

Não controlados: não são controlados por ninguém
Ex: um input que guarda o seu valor. Auto-suficiente

Controlados: controlados por algum outro componente ou não auto-suficientes. 
Necessita guardar em uma variável.

*/
