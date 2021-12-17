import React, { useState } from "react"
import "./Shop.scss"
import Header from "./Header&Nav/Header"
import ShopNav from "./Header&Nav/ShopNav"
import Items from "./Items/Items"

const Shop = ({ products, onAddToCart }) => {
  const [headerName, setHeaderName] = useState("All Items")
  const [active, setActive] = useState("All Items")
  const [display, setDisplay] = useState(products)

  // Displays items based off of users selection
  const changeArr = (name, active) => {
    setDisplay(
      name === "All Items"
        ? products
        : products.filter((item) => item.description === name)
    )
    setHeaderName(active)
    setActive(active)
  }

  return (
    <div className="container shop-container">
      <Header headerName={headerName} />
      <div className="shop-main">
        <div>
          <ShopNav active={active} changeArr={changeArr} />
        </div>
        <Items display={display} onAddToCart={onAddToCart} />
      </div>
    </div>
  )
}

export default Shop
