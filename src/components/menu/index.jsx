import React, { useEffect, useState } from "react"
import Product from "../product"
import { MenuWrapper } from "./style"
import one from "../../data/one"

function Menu() {
  const [menus, setMenu] = useState(one)
  console.log(menus)

  return (
    <MenuWrapper>
      {menus.map((menu, id) => (
        <Product key={id} name={menu.name} description={menu.description} price={menu.price} />
      ))}
    </MenuWrapper>
  )
}

export default Menu
