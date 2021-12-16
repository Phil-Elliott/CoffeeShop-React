import React from "react"
import Item from "./Item"

const ItemsMenu = ({ list }) => {
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

export default ItemsMenu
