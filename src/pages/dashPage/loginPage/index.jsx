import React from "react"
import LoginForm from "../../../components/dash/login"
import * as S from "./style"
import { Container } from "react-bootstrap"
import Logo from "../../../components/common/logo"

function LoginPage() {
  return (
    <Container>
      <Logo size={100} />
      <LoginForm />
    </Container>
  )
}

export default LoginPage
