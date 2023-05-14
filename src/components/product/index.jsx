// Product.jsx
import React from "react"
import { Container } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description }) {
  return (
    <Container>
      <S.ProductWrapper onClick={() => {}}>
        <S.ProductImg src="/img/logo.png" size={30} />

        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>{price}원</S.ProductPrice>
      </S.ProductWrapper>
    </Container>
  )
}

export default Product
