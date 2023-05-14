import React, { useEffect, useState } from "react"
import Product from "../product"
import { MenuWrapper } from "./style"

function Menu(props) {
  const [menus, setMenu] = useState(props.items || [])

  useEffect(() => {
    setMenu(props.items || [])
  }, [props.items])

  // console.log(props.items)
  // console.log(menus)

  return (
    <MenuWrapper>
      {menus.map((menu, i) => {
        // console.log(i) // JSX 외부에서 console.log 실행

        return <Product key={menu.id} name={menu.menuName} description={menu.description} price={menu.menuPrice} />
      })}
    </MenuWrapper>
  )
}

export default Menu
