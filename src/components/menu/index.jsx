// Menu.jsx
import React from "react"
import Product from "../product"
import * as S from "./style"

function Menu({ items, selectedCategory }) {
  const filteredItems = items.find((category) => category.id === selectedCategory)

  if (!filteredItems) {
    return <div>상품이 없습니다.</div>
  }

  return (
    <S.MenuWrapper>
      {filteredItems.items.map((item) => (
        <Product key={item.id} name={item.name} price={item.price} description={item.description} />
      ))}
    </S.MenuWrapper>
  )
}

export default Menu
