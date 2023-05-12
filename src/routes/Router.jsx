import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../components/kioskmain/index"

// import LoginPage from "../pages/loginPage"
// import RegisterPage from "../pages/registerPage"
// import HomePage from "../pages/homePage"
// import StoreRegisterPage from "../pages/storeRegisterPage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/store" element={<StoreRegisterPage />} />  */}
        <Route path="/" element={<KioskMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
