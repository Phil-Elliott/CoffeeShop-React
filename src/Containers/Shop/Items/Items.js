import React from "react"
import Card from "./Card"

const Items = ({ display, onAddToCart }) => {
  return (
    <div className="item-cards">
      {display.map((product) => {
        return <Card product={product} onAddToCart={onAddToCart} />
      })}
    </div>
  )
}

export default Items
