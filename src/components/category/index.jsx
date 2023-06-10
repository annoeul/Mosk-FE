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
              border: "none",
              borderBottom: `3px groove ${category.id === selectedCategory ? "#a399a1" : "transparent"}`,
              fontSize: "15px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              margin: "0 auto",
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
