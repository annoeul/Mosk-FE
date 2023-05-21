import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../pages/kioskmain"

import LoginPage from "../pages/dashPage/loginPage"
import RegisterPage from "../pages/dashPage/registerPage"
import StoreRegisterPage from "../pages/dashPage/storeRegisterPage"
import PayPage from "../pages/payPage"
import DashHome from "../components/dash/dashHome"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KioskMain />} />
        <Route path="/pay" element={<PayPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/store" element={<StoreRegisterPage />} />
        <Route path="/dashhome" element={<DashHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
