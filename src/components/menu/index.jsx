import React from "react"
import Product from "../product"
import * as S from "./style"

function Menu({ items, selectedCategory }) {
  const filteredItems = items.filter((category) => category.id === selectedCategory)

  if (!filteredItems || filteredItems.length === 0 || !filteredItems[0].items) {
    return null
  }

  return (
    <S.MenuWrapper>
      {filteredItems[0].items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          options={item.options}
          items={items} // Pass the entire items array for options lookup
        />
      ))}
    </S.MenuWrapper>
  )
}

export default Menu
