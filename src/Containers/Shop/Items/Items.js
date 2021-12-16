import React, { useState } from "react"
import Card from "./Card"

const Items = ({ newArr, addCartItems }) => {
  return (
    <div className="item-cards">
      {newArr.map((entry, i) => {
        return (
          <Card
            key={i}
            picture={newArr[i].picture}
            description={newArr[i].description}
            price={newArr[i].price}
            group={newArr[i].group}
            addCartItems={addCartItems}
          />
        )
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
*/
