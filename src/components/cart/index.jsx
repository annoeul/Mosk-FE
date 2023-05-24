import React, { useState } from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Modal, Button, Slide } from "@material-ui/core"
import * as S from "./style"
import { useNavigate } from "react-router-dom"

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate()

  const handlePayment = () => {
    navigate("/pay", { state: { cartItems: cartItems } })
  }

  const [modalOpen, setModalOpen] = useState(false)

  const handleCartClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems]
    updatedCartItems.splice(index, 1)
    setCartItems(updatedCartItems)
  }

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems]
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1
    } else {
      updatedCartItems.splice(index, 1) // Remove item when quantity is 1
    }
    setCartItems(updatedCartItems)
  }

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems]
    updatedCartItems[index].quantity += 1
    setCartItems(updatedCartItems)
  }

  const itemCounts = cartItems.reduce((counts, item) => {
    const itemKey = JSON.stringify({
      name: item.name,
      options: item.options.map((option) => option.name),
    })
    if (counts[itemKey]) {
      counts[itemKey] += 1
    } else {
      counts[itemKey] = 1
    }
    return counts
  }, {})

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

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
          <S.CartModalProduct>
            <S.CartModalTitle>장바구니</S.CartModalTitle>
            {cartItems.length > 0 ? (
              <div style={{ flex: 1, overflowY: "auto" }}>
                {Object.entries(itemCounts).map(([itemKey, itemCount]) => {
                  const { name, options } = JSON.parse(itemKey)
                  const item = cartItems.find(
                    (item) =>
                      item.name === name &&
                      JSON.stringify(item.options.map((option) => option.name)) === JSON.stringify(options),
                  )
                  const itemIndex = cartItems.indexOf(item)

                  return (
                    <div
                      key={itemKey}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px dotted black",
                        padding: "10px 0",
                      }}
                    >
                      {/* <S.ProductImg src={item.img} size={30} /> */}
                      <div style={{ textAlign: "start", margin: "0 20px" }}>
                        <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                        {options.length > 0 && <p>-옵션: {options.join(", ")}</p>}
                        <p>-가격: {item.price}원</p>
                        <p>-개수: {item.quantity}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          marginRight: "20px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleDecreaseQuantity(itemIndex)}
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            minWidth: "auto",
                            padding: "0",
                            marginRight: "5px",
                          }}
                        >
                          -1
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleIncreaseQuantity(itemIndex)}
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            minWidth: "auto",
                            padding: "0",
                          }}
                        >
                          +1
                        </Button>
                      </div>
                      {/* <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemoveItem(itemIndex)}
                        style={{ alignSelf: "center" }}
                      >
                        제거
                      </Button> */}
                    </div>
                  )
                })}
                <S.TotalPrice>총 가격: {totalPrice}원</S.TotalPrice>
              </div>
            ) : (
              <p>장바구니가 비어 있습니다.</p>
            )}
            <S.ButtonWrapper>
              <Button style={{ width: "50%" }} variant="outlined" onClick={handleCloseModal}>
                닫기
              </Button>
              <Button style={{ width: "50%" }} variant="outlined" onClick={handlePayment}>
                결제하기
              </Button>
            </S.ButtonWrapper>
          </S.CartModalProduct>
        </Slide>
      </Modal>
    </>
  )
}

export default Cart
