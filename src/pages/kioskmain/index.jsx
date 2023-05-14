import React, { useEffect, useState } from "react"
import Logo from "../../components/common/logo/index"
import { Container } from "@material-ui/core"

import Menu from "../../components/menu/index"
import Category from "../../components/category"
import axios from "axios"
import Bottom from "../../components/bottom"

function KioskMain() {
  const [items, setItems] = useState()

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/menu")

    setItems(response.data)
  }
  // console.log("items = " + items)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container style={{ maxWidth: "425px", backgroundColor: "grey" }}>
      <Logo size={40} />
      <Category />
      <Menu items={items} />
      {/* <Outlet /> */}
      <Bottom />
    </Container>
  )
}

export default KioskMain
