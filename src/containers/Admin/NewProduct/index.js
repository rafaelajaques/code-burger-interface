/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import ReactSelect from 'react-select';

import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container, Label, Input, ButtonStyles, LabelUpload } from './style';
import api from '../../../services/api';
import { ErrorMessage } from '../../../components';

function NewProduct() {
  const [fileName, setFileName] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => value?.length > 0)
      .test('fileSize', 'Carregue arquivos de até 2MB', (value) => value[0]?.size <= 200000)
      .test(
        'type',
        'Carregue arquivos JPEG ou PNG',
        (value) => value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      ),
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

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando novo produto',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto. Tente novamente!',
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
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
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
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Escolha a categoria"
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct;

/*
Input

Não controlados: não são controlados por ninguém
Ex: um input que guarda o seu valor. Auto-suficiente

Controlados: controlados por algum outro componente ou não auto-suficientes. 
Necessita guardar em uma variável.

*/
