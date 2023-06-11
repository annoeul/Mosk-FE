import React, { useState, useEffect } from "react"
import { Container } from "@material-ui/core"
import Category from "../../components/category"
import Menu from "../../components/menu"
import Cart from "../../components/cart"
import "reset-css"
import { getData, extractProductIds, handleProductIdsAdd, getImage } from "../../apis/api"

function KioskMain() {
  const [items, setItems] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [storeName, setStoreName] = useState("")
  const [productId, setProductId] = useState("")
  const [productIds, setProductIds] = useState([])

  useEffect(() => {
    getData(setItems, setStoreName)
    console.log(items)
    productIds.forEach((productId) => {
      getImage(productId)
    })
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
    <Container style={{ height: "100vh", margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <p style={{ margin: "30px auto" }}>{storeName}</p>
        <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
      </div>
      <Category items={items} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <div></div>
      <div
        style={{
          backgroundColor: "white",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          borderLeft: "none",
          borderTop: "none",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",

          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "absolute",
          right: "0",
        }}
      ></div>
      <Menu
        cartItems={cartItems}
        setCartItems={setCartItems}
        items={items}
        selectedCategory={selectedCategory}
        addToCart={addToCart}
        getImage={getImage}
      />
      <p style={{ textAlign: "center", paddingTop: "50px" }}>By Dajeon PolyTechnic Team3 Mosk</p>
    </Container>
  )
}

export default KioskMain
