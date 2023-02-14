import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
} from './style';
import Button from '../../components/Button';
import RegisterImg from '../../assets/register-image.svg';
import Logo from '../../assets/logo.svg';

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    });
    console.log(response);
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>E-mail</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirme sua Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 10 }}>
            Cadastrar
          </Button>
        </form>
        <SignInLink>
          Já possui uma conta? <a href="https://nenhum.com">Entrar</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Register;
