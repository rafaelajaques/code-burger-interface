import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, LoginImage, ContainerItems, Label, Input, Button, SignInLink } from './style';
import LoginImg from '../../assets/login-image.svg';
import Logo from '../../assets/logo.svg';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Entrar</Button>
        </form>
        <SignInLink>
          Não possui uma conta? <a href="https://nenhum.com">Cadastre-se</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Login;
