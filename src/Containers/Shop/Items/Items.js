import React, { useState } from "react"
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

/*
  create a function that runs the same as the other 
  have it filter through each of the items and bring back the usable list

  if name = all return all 
  else filter by name 

  return (
          <Card
            key={i}
            picture={products[i].picture}
            description={products[i].description}
            price={products[i].price}
            group={products[i].group}
            addCartItems={addCartItems}
          />
        )
*/
