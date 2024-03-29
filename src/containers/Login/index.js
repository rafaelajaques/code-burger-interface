/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Container, LoginImage, ContainerItems, Label, Input, SignInLink } from './style';
import { Button, ErrorMessage } from '../../components';
import LoginImg from '../../assets/login-image.svg';
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique seus dados',
      }
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos');
      } else {
        navigate('/');
      }
    }, 1000);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 40, marginBottom: 15 }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}
