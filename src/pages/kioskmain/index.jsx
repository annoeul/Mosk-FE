import React, { useState, useEffect } from "react"
import { Container } from "@material-ui/core"
import Category from "../../components/category"
import Menu from "../../components/menu"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"
import Logo from "../../components/common/logo/"
import "reset-css"

function KioskMain() {
  const [items, setItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [storeName, setStoreName] = useState("")

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/v1/public/categories/all/1")
      if (response.ok) {
        const data = await response.json()
        setItems(data.data)
        setStoreName(data.data[0].storeName)
      } else {
        console.log("Error: ", response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   console.log(items)
  // }, [items])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (items && items.length > 0) {
      setSelectedCategory(items[0].id)
    }
  }, [items])

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += 1
      setCartItems(updatedCartItems)
    } else {
      const newItem = { ...item, quantity: 1 }
      setCartItems([...cartItems, newItem])
    }
  }

  const handleCategoryChange = (id) => {
    setSelectedCategory(id)
  }

  return (
    <Container style={{ height: "100vh", backgroundColor: "#ebedf0", margin: 0, padding: 0 }}>
      {/* <div style={{ backgroundColor: "#bbc2c7" }}> */}
      <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "20px" }}>
        <p>{storeName}</p>
        <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
      </div>
      <div>
        <Category items={items} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      </div>
      <Menu
        cartItems={cartItems}
        setCartItems={setCartItems}
        items={items}
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
      {/* <Link to="/login">로그인창</Link> */}
      <p style={{ textAlign: "center", paddingTop: "50px" }}>By Dajeon PolyTechnic Team3 Mosk</p>
    </Container>
  )
}

export default KioskMain
