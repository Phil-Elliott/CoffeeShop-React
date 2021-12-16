import React, { useState, useEffect } from "react"
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"

const CartItem = ({ picture, description, price, changeSubtotal }) => {
  const [quantity, setQuantity] = useState("1")

  // Changes the quantity of an item by clicking
  const changeQuantity = (action) => {
    if (action === "add") {
      setQuantity(Number(quantity) + 1)
    } else if (action === "minus") {
      setQuantity(Number(quantity) - 1)
    }
  }

  // Changes the subtotal everytime the quantity changes
  useEffect(() => {
    changeSubtotal(Number(price))
  }, [quantity])

  return (
    <div className="cart-item">
      <div cart-left>
        <FaTimes className="cart-icons" />
        <img src={picture} alt="pic" />
        <p>{description}</p>
      </div>
      <div className="quantity">
        <FaMinus
          className="cart-icons"
          onClick={() => changeQuantity("minus")}
        />
        <p>{quantity}</p>
        <FaPlus className="cart-icons" onClick={() => changeQuantity("add")} />
      </div>
      <p>${(price * quantity).toFixed(2)}</p>
    </div>
  )
}

export default CartItem
