import React, { useState } from "react"
import { BottomWrapper } from "./style"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import Badge from "material-ui/Badge"

function Bottom() {
  const [cart, setCart] = useState(0)
  const countHandle = () => {
    setCart(cart + 1)
  }
  return (
    <BottomWrapper>
      <ShoppingCartOutlinedIcon style={{ margin: "10px" }} fontSize="large" onClick={() => console.log("aa")} />
    </BottomWrapper>
  )
}

export default Bottom
