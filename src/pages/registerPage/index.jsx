import React from "react"
import Logo from "../../components/common/logo"
import * as S from "./style"
import { Container } from "react-bootstrap"
import RegisterForm from "../../components/register"

function RegisterPage() {
  return (
    <Container>
      <S.Wrapper>
        <Logo />
        <RegisterForm />
      </S.Wrapper>
    </Container>
  )
}

export default RegisterPage
