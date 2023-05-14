import React, { useState } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description, options, items }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedOptions([])
  }

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option)

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleAddToCart = () => {
    // 선택된 옵션과 상품 정보를 이용하여 장바구니에 상품을 추가하는 로직을 구현하세요.
    // 장바구니에 상품을 추가하는 함수 또는 API 호출 등을 여기에 작성합니다.
    console.log("Add to cart:", name, selectedOptions)
  }

  return (
    <Container>
      <S.ProductWrapper onClick={handleOpenModal}>
        <S.ProductName>
          {name}
          <br />
          {price}원
        </S.ProductName>
        <S.ProductImg src="/img/logo.png" size={30} />
      </S.ProductWrapper>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <S.ModalWrapper>
          <h2>{name}</h2>
          <p>{description}</p>
          {options && options.length > 0 && (
            <>
              <h3>옵션:</h3>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox checked={selectedOptions.includes(option)} onChange={() => handleOptionChange(option)} />
                  }
                  label={option}
                />
              ))}
            </>
          )}
          {!options || (options.length === 0 && <p>사용 가능한 옵션이 없습니다.</p>)}
          <Button onClick={handleAddToCart}>장바구니</Button>
          <Button onClick={handleCloseModal}>닫기</Button>
        </S.ModalWrapper>
      </Modal>
    </Container>
  )
}

export default Product
