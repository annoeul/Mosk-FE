import React from "react"
import Logo from "../../components/common/logo"
import LoginForm from "../../components/login"
import * as S from "./style"
import { Container } from "react-bootstrap"

function LoginPage() {
  return (
    <Container>
      <S.Wrapper>
        <Logo />
        <LoginForm />
      </S.Wrapper>
    </Container>
  )
}

export default LoginPage
