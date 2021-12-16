import React from "react"

const Item = ({ item, price, description }) => {
  return (
    <div className="item-container">
      <div className="itemTop">
        <h2>{item}</h2>
        <div className="dotLine"></div>
        <h2>{price}</h2>
      </div>
      <div className="itemBottom">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Item
