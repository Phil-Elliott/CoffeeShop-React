import React from "react"
import "./Menu.scss"
import MenuTop from "./MenuTop"
import MenuBottom from "./MenuBottom/MenuBottom"

const Menu = () => {
  return (
    <div className="container menu-container">
      <MenuTop />
      <MenuBottom />
    </div>
  )
}

export default Menu
