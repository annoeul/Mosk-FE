// Menu.jsx
import React from "react"
import Product from "../product"
import * as S from "./style"

function Menu({ items, selectedCategory, addToCart, cartItems, setCartItems }) {
  const filteredItems = items.filter((category) => category.id === selectedCategory)
  // console.log(items.item.optionGroup)

  return (
    <S.MenuWrapper style={{ height: "70vh", overflowY: "auto" }}>
      {filteredItems[0]?.items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          optionGroup={item.optionGroup}
          img={item.img}
          addToCart={addToCart} // Pass the addToCart function
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </S.MenuWrapper>
  )
}

export default Menu
