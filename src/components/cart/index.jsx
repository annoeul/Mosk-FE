import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import * as S from "./style"

function Cart() {
  return (
    <S.CartWrapper>
      <ShoppingCartOutlinedIcon style={{ margin: "10px" }} fontSize="large" />
    </S.CartWrapper>
  )
}

export default Cart
