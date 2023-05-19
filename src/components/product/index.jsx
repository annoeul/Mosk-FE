import React, { useState } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description, options, addToCart }) {
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
    const item = {
      name: name,
      price: price,
      description: description,
      options: selectedOptions,
    }

    addToCart(item)
  }

  return (
    <Container>
      <S.ProductWrapper onClick={handleOpenModal}>
        <S.ProductImg src="/img/logo.png" size={30} />
        <S.ProductName>
          <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>{name}</p>
          <br />
          <p>{price}원</p>
        </S.ProductName>
      </S.ProductWrapper>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <S.ModalWrapper>
          <h2 style={{ fontSize: "1.5rem", padding: "15px 0" }}>{name}</h2>
          <p>{description}</p>
          {options && options.length > 0 && (
            <>
              <h1>- 옵션 -</h1>
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
          <S.ModalButtonWrapper>
            <Button onClick={handleAddToCart}>장바구니</Button>
            <Button onClick={handleCloseModal}>닫기</Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </Modal>
    </Container>
  )
}

export default Product
