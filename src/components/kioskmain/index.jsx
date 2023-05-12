import React from "react"
import Logo from "../common/logo/index"
import { Container } from "@material-ui/core"

import Menu from "../menu/index"
import Category from "../category/index"

function KioskMain() {
  return (
    <Container style={{ maxWidth: "425px", backgroundColor: "grey" }}>
      <Logo size={40} />
      <Category />
      <Menu />
    </Container>
  )
}

export default KioskMain
