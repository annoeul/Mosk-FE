import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Home from "../../components/home"
import Logo from "../../components/common/logo"

function HomePage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timeoutId)
  }, [])
  return <div>{loading ? <Logo size={200} /> : <Home />}</div>
}

export default HomePage
