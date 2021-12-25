import React from "react"
import "./Cart.scss"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = ({ cartProducts, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className="container cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-headers">
        <p style={{ textAlign: "left" }}>Item</p>
        <p>Quanity</p>
        <p>Price</p>
      </div>
      <div className="cart-items">
        {cartProducts.line_items?.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )
        })}
      </div>
      <div className="subtotal">
        <h4>Subtotal</h4>
        <h4>{cartProducts.subtotal.formatted_with_symbol}</h4>
      </div>
      <Link to="/Checkout">
        <h5>Checkout</h5>
      </Link>
    </div>
  )
}

export default Cart
