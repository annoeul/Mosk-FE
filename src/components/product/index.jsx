import { Container } from "@material-ui/core"
import * as S from "./style"

function Product(props) {
  // console.log(props)
  return (
    <Container>
      <S.ProductWrapper onClick={() => {}}>
        <S.ProductImg src="" />
        <S.ProductName>
          {props.name}
          <br />
          {props.price} {/* props.price 값을 표시 */}
        </S.ProductName>
        <S.ProductImg src="/img/logo.png" size={30} />
      </S.ProductWrapper>
    </Container>
  )
}

export default Product
