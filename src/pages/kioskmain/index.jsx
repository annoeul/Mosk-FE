// KioskMain.jsx
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container } from "@material-ui/core"
import Logo from "../../components/common/logo"
import Category from "../../components/category"
import Menu from "../../components/menu"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"

function KioskMain() {
  const [items, setItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  return (
    <Container style={{ maxWidth: "425px", backgroundColor: "#edf0f5" }}>
      <Logo size={40} />
      <Category items={items} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <Menu items={items} selectedCategory={selectedCategory} />
      <Cart />
      <Link to="/login">로그인창</Link>
    </Container>
  )
}

export default KioskMain
