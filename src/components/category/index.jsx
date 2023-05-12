import { Button } from "@material-ui/core"
import React from "react"
import * as S from "./style"

function Category() {
  return (
    <S.CategoryWrapper>
      <Button style={{ backgroundColor: "blue", margin: "5px" }}>카</Button>
      <Button style={{ backgroundColor: "blue", margin: "5px" }}>테</Button>
      <Button style={{ backgroundColor: "blue", margin: "5px" }}>테</Button>
      <Button style={{ backgroundColor: "blue", margin: "5px" }}>리</Button>
      <Button style={{ backgroundColor: "blue", margin: "5px" }}>임</Button>
    </S.CategoryWrapper>
  )
}

export default Category
