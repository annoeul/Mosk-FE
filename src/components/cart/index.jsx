// Cart.jsx
import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Modal, Button } from "@material-ui/core"
import * as S from "./style"

function Cart({ cartItems }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleCartClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  // 총 가격 계산
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <>
      <S.CartWrapper onClick={handleCartClick}>
        <ShoppingCartOutlinedIcon style={{ margin: "10px" }} fontSize="large" />
        {cartItems.length > 0 && <S.CartCount>{cartItems.length}</S.CartCount>}
      </S.CartWrapper>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
          <h2>장바구니</h2>
          {cartItems.length > 0 ? (
            <div>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.options.join(", ")} ({item.price}원)
                  </li>
                ))}
              </ul>
              <p>총 가격: {totalPrice}원</p>
            </div>
          ) : (
            <p>장바구니가 비어 있습니다.</p>
          )}
          <Button onClick={handleCloseModal}>닫기</Button>
        </div>
      </Modal>
    </>
  )
}

export default Cart
