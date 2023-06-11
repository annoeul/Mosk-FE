import React from "react"
import { Button, Container } from "@material-ui/core"
import "reset-css"
import * as S from "./style"

function Category({ items, selectedCategory, onChange }) {
  return (
    <Container style={{ alignItems: "center" }}>
      <S.CategoryWrapper>
        {items.map((category) => (
          <Button
            key={category.id}
            style={{
              border: `1px groove ${category.id === selectedCategory ? "#a399a1" : "transparent"}`,
              borderRadius: "11px",
              fontSize: "15px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              margin: "10px auto",
              backgroundColor: "transparent",
              color: category.id === selectedCategory ? "#ae9220" : "#5a5f62",
            }}
            onClick={() => onChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </S.CategoryWrapper>
    </Container>
  )
}

export default Category
