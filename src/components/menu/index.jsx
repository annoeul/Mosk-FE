// Menu.jsx
import React, { useState, useEffect } from "react"
import Product from "../product"
import * as S from "./style"
import { Container } from "@material-ui/core"
import { Box } from "@mui/material"

function Menu({ items, selectedCategory, addToCart, cartItems, setCartItems, getImage }) {
  const [filteredCategory, setFilteredCategory] = useState(null)

  useEffect(() => {
    const fetchFilteredCategory = async () => {
      const category = items.find((category) => category.id === selectedCategory)
      setFilteredCategory(category)

      const updatedProducts = await Promise.all(
        category.products.map(async (product) => {
          const data = await getImage(product.id)
          return { ...product, encodedImg: data.data.encodedImg }
        }),
      )

      setFilteredCategory((prevCategory) => ({
        ...prevCategory,
        products: updatedProducts,
      }))
    }

    if (selectedCategory) {
      fetchFilteredCategory()
    }
  }, [selectedCategory])

  if (!filteredCategory) {
    return null // 또는 로딩 스피너 등의 로딩 상태를 표시할 수 있습니다.
  }

  return (
    <Container>
      <S.MenuWrapper>
        {filteredCategory.products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            optionGroup={item.optionGroups}
            img={item.encodedImg}
            addToCart={addToCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </S.MenuWrapper>
      <S.LeftCircle />
      <S.RightCircle />
    </Container>
  )
}

export default Menu
