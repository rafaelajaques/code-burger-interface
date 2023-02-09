import React from 'react';
import { Container, LoginImage, ContainerItems, Label, Input, Button, SignInLink } from './style';
import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'


function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image"/>
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger"/>
        <h1>Login</h1>

        <Label>E-mail</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
        <SignInLink>
          Não possui uma conta? <a href="https://nenhum.com">Cadastre-se</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Login;
