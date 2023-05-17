import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../pages/kioskmain"
import CartPage from "../pages/cart"
import LoginPage from "../pages/dashPage/loginPage"
import RegisterPage from "../pages/dashPage/registerPage"
import StoreRegisterPage from "../pages/dashPage/storeRegisterPage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KioskMain />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/store" element={<StoreRegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
