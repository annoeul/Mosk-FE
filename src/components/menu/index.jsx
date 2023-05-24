// Menu.jsx
import React from "react"
import Product from "../product"
import * as S from "./style"
import { Container } from "@material-ui/core"

function Menu({ items, selectedCategory, addToCart, cartItems, setCartItems }) {
  const filteredItems = items.filter((category) => category.id === selectedCategory)

  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <S.MenuWrapper style={{ height: "70vh", overflowY: "auto" }}>
        {filteredItems[0]?.items.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            optionGroup={item.optionGroup}
            img={item.img}
            addToCart={addToCart} // addToCart 함수 전달
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </S.MenuWrapper>
    </Container>
  )
}

export default Menu
