import React, { useState, useEffect } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description, optionGroup, addToCart, img }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [totalPrice, setTotalPrice] = useState(price)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedOptions([])
    setTotalPrice(price)
  }

  const handleOptionChange = (groupIndex, optionIndex) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions]

      // 이미 선택된 옵션인지 확인
      const option = optionGroup[groupIndex].options[optionIndex]
      const optionExists = newOptions.find((opt) => opt.groupIndex === groupIndex && opt.optionIndex === optionIndex)

      // 선택된 옵션이 없으면 추가, 이미 선택된 옵션이면 제거
      if (!optionExists) {
        newOptions.push({ groupIndex, optionIndex })
      } else {
        const optionIndexToRemove = newOptions.findIndex(
          (opt) => opt.groupIndex === groupIndex && opt.optionIndex === optionIndex,
        )
        newOptions.splice(optionIndexToRemove, 1)
      }

      return newOptions
    })
  }

  useEffect(() => {
    let updatedPrice = price

    selectedOptions.forEach((option) => {
      const optionPrice = optionGroup[option.groupIndex].options[option.optionIndex].price
      updatedPrice += optionPrice
    })

    setTotalPrice(updatedPrice)
  }, [selectedOptions])

  const handleAddToCart = () => {
    const options = optionGroup.map((group, groupIndex) => {
      const selectedOptionIndex = selectedOptions.find((opt) => opt.groupIndex === groupIndex)?.optionIndex

      if (selectedOptionIndex !== undefined) {
        return group.options[selectedOptionIndex]
      }
    })

    const item = {
      name: name,
      price: price, // 가격은 원래 가격으로 유지
      description: description,
      options: options.filter(Boolean), // 필터링하여 undefined 제거
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
          <p>{totalPrice}원</p> {/* 선택한 옵션에 대한 가격 표시 */}
        </S.ProductName>
      </S.ProductWrapper>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <S.ModalWrapper>
          <h2 style={{ fontSize: "1.5rem", padding: "15px 0" }}>{name}</h2>
          <p>{description}</p>
          {optionGroup && optionGroup.length > 0 && (
            <>
              <h3>옵션 선택</h3>
              {optionGroup.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3>{group.name}</h3>
                  {group.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      control={
                        <Checkbox
                          checked={selectedOptions.some(
                            (opt) => opt.groupIndex === groupIndex && opt.optionIndex === optionIndex,
                          )}
                          onChange={() => handleOptionChange(groupIndex, optionIndex)}
                        />
                      }
                      label={`${option?.name || "미정의"} (${option?.price || 0}원)`}
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
          {selectedOptions.length > 0 && (
            <p>
              선택한 옵션:{" "}
              {selectedOptions
                .map((option) => optionGroup[option.groupIndex]?.options[option.optionIndex]?.name)
                .join(", ")}
            </p>
          )}
          <p>총 가격: {totalPrice}원</p> {/* 선택한 옵션에 대한 총 가격 표시 */}
        </S.ModalWrapper>
      </Modal>
    </Container>
  )
}

export default Product
