// Cart.jsx
import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Modal, Button, Slide } from "@material-ui/core"
import * as S from "./style"
import { useNavigate } from "react-router-dom"

function Cart({ cartItems }) {
  const pay = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  const handleCartClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const itemCounts = cartItems.reduce((counts, item) => {
    const itemKey = `${item.name}-${item.options.join("-")}`
    if (counts[itemKey]) {
      counts[itemKey] += 1
    } else {
      counts[itemKey] = 1
    }
    return counts
  }, {})

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
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Slide direction="up" in={modalOpen} mountOnEnter unmountOnExit>
          <div
            style={{
              backgroundColor: "white",
              // padding: "20px",
              borderRadius: "10px",
              maxHeight: "70vh",
              width: "100%",
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "#000", // Change the border color to your desired color
              display: "flex",
              flexDirection: "column",
            }}
          >
            <S.CartModalTitle>장바구니</S.CartModalTitle>
            {cartItems.length > 0 ? (
              <div style={{ flex: 1, overflowY: "auto" }}>
                {Object.entries(itemCounts).map(([itemKey, itemCount]) => {
                  const [itemName, ...itemOptions] = itemKey.split("-")
                  const item = cartItems.find(
                    (item) => item.name === itemName && item.options.join("-") === itemOptions.join("-"),
                  )
                  return (
                    <div
                      key={itemKey}
                      style={{
                        // marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px dotted black",
                        padding: "10px 0",
                      }}
                    >
                      <S.ProductImg src="/img/logo.png" size={30} />
                      {/* 나중에 이미지 넣을 자리 */}
                      <div style={{ textAlign: "end", margin: "0 20px" }}>
                        <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                        {itemOptions.length > 0 && <p>-옵션: {itemOptions.join(", ")}</p>}
                        <p>-가격: {item.price}원</p>
                        <p>-개수: {itemCount}</p>
                      </div>
                    </div>
                  )
                })}
                <S.TotalPrice>총 가격: {totalPrice}원</S.TotalPrice>
              </div>
            ) : (
              <p>장바구니가 비어 있습니다.</p>
            )}
            <S.ButtonWrapper>
              <Button
                style={{ width: "50%", backgroundColor: "#f089d1" }}
                variant="outlined"
                onClick={handleCloseModal}
              >
                닫기
              </Button>
              <Button
                style={{ width: "50%", backgroundColor: "#74bee8" }}
                variant="outlined"
                onClick={() => {
                  pay("/pay")
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
