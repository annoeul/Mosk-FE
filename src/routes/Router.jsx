import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "../pages/kioskmain"
import PayPage from "../pages/payPage"
import Logo from "../components/common/logo"

function Router() {
  const [showLogo, setShowLogo] = useState(true)
  const [showKioskMain, setShowKioskMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
      setTimeout(() => {
        setShowKioskMain(true)
      }, 500) // 로고가 사라진 후 0.5초 후에 KioskMain이 나타나도록 지연 설정
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <div style={{ position: "relative", height: "100vh" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${showLogo ? 1 : 0})`,
            transition: "transform 1s, opacity 1s", // 트랜지션 설정 (1초 동안 페이드 아웃 및 크기 변환)
            opacity: showLogo ? 1 : 0,
          }}
        >
          <Logo size={100} />
        </div>

        {showKioskMain && (
          <div>
            <Routes>
              <Route path="/" element={<KioskMain />} />
              <Route path="/pay" element={<PayPage />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  )
}

export default Router
