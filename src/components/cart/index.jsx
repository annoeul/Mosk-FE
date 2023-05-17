import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import * as S from "./style"

function Cart() {
  const [cart, setCart] = useState(0)
  const countHandle = () => {
    setCart(cart + 1)
  }
  return (
    <S.CartWrapper>
      <ShoppingCartOutlinedIcon style={{ margin: "10px" }} fontSize="large" onClick={() => console.log("aa")} />
    </S.CartWrapper>
  )
}

export default Cart
