import React, { useState } from "react"
import "./Cart.scss"
import CartItem from "./CartItem"

const Cart = ({ cartItems }) => {
  const [subtotal, setSubtotal] = useState(0.0)

  // Used to get the subtotal for all of the items
  const changeSubtotal = (total) => {
    setSubtotal(subtotal + total)
  }

  return (
    <div className="container cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-headers">
        <p style={{ textAlign: "left" }}>Item</p>
        <p>Quanity</p>
        <p>Price</p>
      </div>
      <div className="cart-items">
        {cartItems.map((entry, i) => {
          return (
            <CartItem
              key={i}
              picture={cartItems[i].picture}
              description={cartItems[i].description}
              price={cartItems[i].price}
              changeSubtotal={changeSubtotal}
            />
          )
        })}
      </div>
      <div className="subtotal">
        <h4>Subtotal</h4>
        <h4>${subtotal.toFixed(2)}</h4>
      </div>
      <button>Checkout</button>
    </div>
  )
}

export default Cart
