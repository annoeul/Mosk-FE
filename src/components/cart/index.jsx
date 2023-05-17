// Cart.jsx
import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Modal, Button, Slide } from "@material-ui/core"
import * as S from "./style"

function Cart({ cartItems }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleCartClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  // 아이템 개수 계산
  const itemCounts = cartItems.reduce((counts, item) => {
    const itemKey = `${item.name}-${item.options.join("-")}`
    if (counts[itemKey]) {
      counts[itemKey] += 1
    } else {
      counts[itemKey] = 1
    }
    return counts
  }, {})

  // 총 가격 계산
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <>
      <S.CartWrapper onClick={handleCartClick}>
        <ShoppingCartOutlinedIcon style={{ margin: "10px" }} fontSize="large" />
        {cartItems.length > 0 && <S.CartCount>{cartItems.length}</S.CartCount>}
      </S.CartWrapper>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        style={{
          display: "flex",
          alignItems: "flex-start", // Align content to the top
          justifyContent: "center",
        }}
      >
        <Slide direction="down" in={modalOpen} mountOnEnter unmountOnExit>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              // maxHeight: "70vh",
              width: "100%",
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: S.CartWrapper.borderColor,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ paddingBottom: "10px", fontSize: "20px", textAlign: "center" }}>장바구니</h2>
            {cartItems.length > 0 ? (
              <div style={{ flex: 1, overflowY: "auto" }}>
                {Object.entries(itemCounts).map(([itemKey, itemCount]) => {
                  const [itemName, ...itemOptions] = itemKey.split("-")
                  const item = cartItems.find(
                    (item) => item.name === itemName && item.options.join("-") === itemOptions.join("-"),
                  )
                  return (
                    <div key={itemKey} style={{ marginBottom: "10px" }}>
                      <h3>{item.name}</h3>
                      {itemOptions.length > 0 && <p>-옵션: {itemOptions.join(", ")}</p>}
                      <p>-가격: {item.price}원</p>
                      <p>-개수: {itemCount}</p>
                    </div>
                  )
                })}
                <p style={{ textAlign: "center", paddingTop: "10px" }}>총 가격: {totalPrice}원</p>
              </div>
            ) : (
              <p>장바구니가 비어 있습니다.</p>
            )}
            <S.ButtonWrapper>
              <Button onClick={handleCloseModal}>닫기</Button>
              <Button
                onClick={() => {
                  alert("aa")
                }}
              >
                결제하기
              </Button>
            </S.ButtonWrapper>
          </div>
        </Slide>
      </Modal>
    </>
  )
}

export default Cart
