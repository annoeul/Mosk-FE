import React from "react"
import { BottomWrapper } from "./style"
import { Button } from "@material-ui/core"

function Bottom() {
  return (
    <BottomWrapper>
      <Button style={{ backgroundColor: "green", width: "100%" }}>장바구니</Button>
    </BottomWrapper>
  )
}

export default Bottom
