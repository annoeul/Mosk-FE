import React, { useState } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description, optionGroup, addToCart, img }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedOptions({})
  }

  const handleOptionChange = (groupIndex, optionIndex) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions }

      if (newOptions[groupIndex] && newOptions[groupIndex] === optionIndex) {
        delete newOptions[groupIndex]
      } else {
        newOptions[groupIndex] = optionIndex
      }

      return newOptions
    })
  }

  const handleAddToCart = () => {
    const options = []

    optionGroup.forEach((group, groupIndex) => {
      const selectedOptionIndex = selectedOptions[groupIndex]

      if (selectedOptionIndex !== undefined) {
        const selectedOption = group.options[selectedOptionIndex]
        options.push(selectedOption)
      }
    })

    const item = {
      name: name,
      price: price,
      description: description,
      options: options,
    }

    addToCart(item)
  }

  return (
    <Container>
      <S.ProductWrapper onClick={handleOpenModal}>
        <S.ProductImg src={img} alt={name} size={100} />
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
          {optionGroup && optionGroup.length > 0 && (
            <>
              <h1>- 옵션 -</h1>
              {optionGroup.map((options, groupIndex) => (
                <div key={options.name}>
                  <h3>{options.name}</h3>
                  {options.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={option.id}
                      control={
                        <Checkbox
                          checked={selectedOptions[groupIndex] === optionIndex}
                          onChange={() => handleOptionChange(groupIndex, optionIndex)}
                        />
                      }
                      label={`${option.name} (${option.price}원)`}
                    />
                  ))}
                </div>
              ))}
            </>
          )}
          {(!optionGroup || optionGroup.length === 0) && <p>사용 가능한 옵션이 없습니다.</p>}
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
