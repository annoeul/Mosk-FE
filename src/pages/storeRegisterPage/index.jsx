import React from "react"
import StoreRegisterForm from "../../components/storeRegister"
import Logo from "../../components/common/logo"
import { Container } from "react-bootstrap"

function StorePage() {
  return (
    <Container>
      <Logo size={80} />
      <StoreRegisterForm />
    </Container>
  )
}

export default StorePage
