import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../pages/kioskmain"
import LoginPage from "../pages/userPage/loginPage"
import RegisterPage from "../pages/userPage/registerPage"
import StoreRegisterPage from "../pages/userPage/storeRegisterPage"
import PayPage from "../pages/payPage"
import DashPages from "../pages/dashBoard/index"
import HomePage from "../pages/userPage/homePage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KioskMain />} />
        <Route path="/pay" element={<PayPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/dashhome" element={<DashPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/store" element={<StoreRegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
