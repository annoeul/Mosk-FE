import React from "react"
import { Button } from "@material-ui/core"
import "reset-css"
import * as S from "./style"

function Category({ items, selectedCategory, onChange }) {
  return (
    <S.CategoryWrapper>
      {items.map((category) => (
        <Button
          key={category.id}
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            backgroundColor: category.id === selectedCategory ? "#a399a1" : "transparent",
            color: category.id === selectedCategory ? "#fff" : "#000",
          }}
          onClick={() => onChange(category.id)}
        >
          {category.category}
        </Button>
      ))}
    </S.CategoryWrapper>
  )
}

export default Category
