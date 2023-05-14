import React from "react"
import Logo from "../../components/common/logo"
import LoginForm from "../../components/login"
import * as S from "./style"
import { Container } from "react-bootstrap"

function LoginPage() {
  return (
    <Container>
      <Logo size={100} />
      <LoginForm />
    </Container>
  )
}

export default LoginPage
