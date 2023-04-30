import React from "react"
import Logo from "../../components/common/logo"
import * as S from "./style"
import { Container } from "react-bootstrap"
import RegisterForm from "../../components/register"
import { Outlet } from "react-router-dom"

function RegisterPage() {
  return (
    <Container>
      <Logo size={80} />
      <RegisterForm />
    </Container>
  )
}

export default RegisterPage
