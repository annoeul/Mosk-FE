import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
