import React, { useState, useEffect } from "react"
import { Container } from "@material-ui/core"
import Category from "../../components/category"
import Menu from "../../components/menu"
import Cart from "../../components/cart"
import "reset-css"
import { LeftCircleDiv, RightCircleDiv } from "./style"

function KioskMain() {
  const [items, setItems] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [storeName, setStoreName] = useState("")
  const [productId, setProductId] = useState("")
  const [productIds, setProductIds] = useState([])

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/v1/public/categories/all/1")
      if (response.ok) {
        const data = await response.json()
        setItems(data.data)
        setStoreName(data.data[0].storeName)

        extractProductIds()
      } else {
        console.log("Error: ", response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const extractProductIds = () => {
    //각 카테고리의 상품들의 아이디를 추출
    items.forEach((item) => {
      //각 카테고리의 상품들 하나하나에 접근
      if (item.products.length > 0) {
        item.products.forEach((product) => {
          handleProductIdsAdd(product.id)
        })
      }
    })
  }

  const handleProductIdsAdd = (productId) => {
    setProductIds((prevProductIds) => [...prevProductIds, productId])
  }

  const getImage = async (productId) => {
    try {
      const response = await fetch(`http://localhost:9090/api/v1/public/products/img/${productId}`)
      if (response.ok) {
        return await response.json()
      } else {
        console.log("Error: ", response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
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
          backgroundColor: "#ddd",
        }}
      >
        <p style={{ margin: "30px auto", fontFamily: "monospace" }}>{storeName}</p>
        <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
      </div>
      <Category items={items} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <LeftCircleDiv />
      <RightCircleDiv />
      <Menu
        cartItems={cartItems}
        setCartItems={setCartItems}
        items={items}
        selectedCategory={selectedCategory}
        addToCart={addToCart}
        getImage={getImage}
      />

      {/* <Link to="/login">로그인창</Link> */}
      <p style={{ textAlign: "center", paddingTop: "50px" }}>By Dajeon PolyTechnic Team3 Mosk</p>
    </Container>
  )
}

export default KioskMain
