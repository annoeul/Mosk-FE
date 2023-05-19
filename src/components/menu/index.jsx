// Menu.jsx
import React from "react"
import Product from "../product"
import * as S from "./style"

function Menu({ items, selectedCategory, addToCart }) {
  const filteredItems = items.filter((category) => category.id === selectedCategory)

  return (
    <S.MenuWrapper style={{ height: "70vh", overflowY: "auto" }}>
      {filteredItems[0]?.items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          options={item.options}
          addToCart={addToCart} // Pass the addToCart function
        />
      ))}
    </S.MenuWrapper>
  )
}

export default Menu
