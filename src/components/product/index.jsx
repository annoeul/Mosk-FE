import { Container } from "@material-ui/core"
import * as S from "./style"

import one from "../../data/one"

function Product({ name, price, description }) {
  return (
    <Container>
      <S.ProductWrapper
        onClick={() => {
          alert("asd")
        }}
      >
        <S.ProductImg src="" />
        <S.ProductName>
          {name}
          <br />
          {price}
        </S.ProductName>
        <S.ProductImg src="/img/logo.png" size={30}></S.ProductImg>
      </S.ProductWrapper>
    </Container>
  )
}

export default Product
