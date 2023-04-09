/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import ReactSelect from 'react-select';

import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, Label, Input, ButtonStyles, LabelUpload } from './style';
import api from '../../../services/api';

function NewProduct() {
  const [fileName, setFileName] = useState('');
  const [categories, setCategories] = useState([]);
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      console.log(data);
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

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
        <Controller
          name="category_id"
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

Controlados: controlados por algum outro componente ou não são auto-suficiente. 
Necessita guardar em uma variável.

*/
