import React, { useState, useEffect } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ id, name, price, description, optionGroup, img, cartItems, setCartItems }) {
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
    const options = optionGroup
      .map((group, groupIndex) => {
        const selectedOptionIndex = selectedOptions.find((opt) => opt.groupIndex === groupIndex)?.optionIndex

        if (selectedOptionIndex !== undefined) {
          const selectedOption = group.options[selectedOptionIndex]
          const optionWithPrice = { ...selectedOption, price: selectedOption.price }
          return optionWithPrice
        }
      })
      .filter(Boolean)

    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === name && item.options.length === options.length,
    )

    if (existingCartItemIndex !== -1) {
      // 이미 동일한 아이템이 장바구니에 있는 경우
      const existingCartItem = cartItems[existingCartItemIndex]
      const updatedOptions = [...existingCartItem.options, ...options]
      const updatedCartItem = {
        ...existingCartItem,
        options: updatedOptions,
        quantity: existingCartItem.quantity + 1,
      }
      const updatedCartItems = [...cartItems]
      updatedCartItems.splice(existingCartItemIndex, 1, updatedCartItem)
      setCartItems(updatedCartItems)
    } else {
      // 장바구니에 새로운 아이템 추가
      const item = {
        name: name,
        price: totalPrice,
        description: description,
        options: options.filter(Boolean),
        quantity: 1,
      }
      setCartItems([...cartItems, item])
    }

    console.log("ProductId:", id) // 상품의 ID를 콘솔에 출력
    options.forEach((option) => {
      console.log("OptionId:", option.id) // 선택한 옵션
    })

    handleCloseModal() // 모달 닫기
  }

  return (
    <Container>
      <S.ProductWrapper onClick={handleOpenModal}>
        <S.ProductImg src={`data:image/png;base64,${img}`} alt={name} size={90} />
        {/* <S.ProductImg src={img} alt={name} size={100} /> */}
        <S.ProductName>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: "13px" }}>{name}</p>
          <br />
          <p>{totalPrice}원</p> {/* 선택한 옵션에 대한 가격 표시 */}
          <br />
        </S.ProductName>
      </S.ProductWrapper>

      {/* 옵션모달 */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <S.ModalWrapper>
          <h2
            style={{
              fontSize: "1.5rem",
              padding: "15px 0",
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {name}
          </h2>
          <p>{description}</p>
          {optionGroup && optionGroup.length > 0 && (
            <>
              <S.OptionTitle>옵션 선택</S.OptionTitle>
              {optionGroup.map((group, groupIndex) => (
                <S.OptionGroup key={groupIndex}>
                  <S.OptionGroupName>{group.name}</S.OptionGroupName>
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
                      style={{ display: "block" }} // 이 부분을 추가하여 한 줄에 하나씩 표시하도록 설정합니다.
                    />
                  ))}
                </S.OptionGroup>
              ))}
            </>
          )}
          {(!optionGroup || optionGroup.length === 0) && <p>사용 가능한 옵션이 없습니다.</p>}
          <S.Total>
            <S.TotalPrice>총 가격: {totalPrice}원</S.TotalPrice>
            {selectedOptions.length > 0 && (
              <p>
                선택한 옵션:{" "}
                {selectedOptions
                  .map((option) => {
                    const group = optionGroup[option.groupIndex]
                    const selectedOption = group.options[option.optionIndex]
                    return `${group.name}: ${selectedOption ? selectedOption.name : "미정의"} (${
                      selectedOption ? selectedOption.price : 0
                    }원)`
                  })
                  .join(", ")}
              </p>
            )}
          </S.Total>
          {/* 선택한 옵션에 대한 총 가격 표시 */}
          <S.ModalButtonWrapper>
            <Button onClick={handleCloseModal}>닫기</Button>
            <Button onClick={handleAddToCart}>장바구니</Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </Modal>
    </Container>
  )
}

export default Product
