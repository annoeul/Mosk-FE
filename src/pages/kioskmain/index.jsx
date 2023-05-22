// KioskMain.jsx
import React, { useState, useEffect } from "react"
import { Container } from "@material-ui/core"
import Category from "../../components/category"
import Menu from "../../components/menu"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"
import "reset-css"

function KioskMain() {
  const [items, setItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [cartItems, setCartItems] = useState([]) // 장바구니 아이템 상태 추가

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9090/menu")
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      } else {
        console.log("Error: ", response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // items 데이터가 변경될 때마다 첫 번째 카테고리의 id를 선택한 카테고리로 설정
    if (items && items.length > 0) {
      setSelectedCategory(items[0].id)
    }
  }, [items])

  useEffect(() => {
    getData()
  }, [])

  const addToCart = (item) => {
    // 장바구니에 이미 동일한 아이템이 있는지 확인
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 있는 아이템인 경우 수량을 증가시킴
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += 1

      setCartItems(updatedCartItems)
    } else {
      // 장바구니에 없는 아이템인 경우 수량을 1로 설정하여 추가
      const newItem = { ...item, quantity: 1 }
      setCartItems([...cartItems, newItem])
    }
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  return (
    <Container style={{ height: "100vh", backgroundColor: "#ddd" }}>
      {/* <Logo size={40} /> */}
      <div>
        <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
        <Category items={items} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      </div>
      <Menu
        cartItems={cartItems}
        setCartItems={setCartItems}
        items={items}
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
      <Link to="/login">로그인창</Link>
      <p style={{ textAlign: "center", paddingTop: "50px" }}>By Dajeon PolyTechic Team3</p>
    </Container>
  )
}

export default KioskMain
