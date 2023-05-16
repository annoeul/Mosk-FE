import React from "react"
import { useNavigate } from "react-router-dom"

function CartPage() {
  const back = useNavigate()
  return (
    <div>
      CartPage
      <button onClick={() => back(-1)}>asd</button>
    </div>
  )
}

export default CartPage
