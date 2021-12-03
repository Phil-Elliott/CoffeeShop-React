import React from "react"
import Item from "./Item"

const CoffeeMenu = ({ list }) => {
  return (
    <div className="item-container">
      {list.map((entry, i) => {
        return (
          <Item
            key={i}
            item={list[i].item}
            price={list[i].price}
            description={list[i].description}
          />
        )
      })}
    </div>
  )
}

export default CoffeeMenu

/*
  - Have menu change on click 
  - add an active class to each button 
  - make it the same as the other buttons 
*/
