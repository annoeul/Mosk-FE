import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../pages/kioskmain"
import PayPage from "../pages/payPage"
import Logo from "../components/common/logo"

function Router() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {showLogo ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#ddd",
          }}
        >
          <Logo size={100} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<KioskMain />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default Router
