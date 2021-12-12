import React from "react"
import "./Cart.scss"
import CartItem from "./CartItem"

const Cart = ({ cartItems }) => {
  return (
    <div className="container cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-headers">
        <p>Item</p>
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
            />
          )
        })}
      </div>
    </div>
  )
}

export default Cart

/*
  
  Have the buy button on the shop page add the item to the cart page 
    maybe have it trigger a function on the main page that sets some data
    need to pass through the part of the array 
      maybe do it through the map item (have each one have the function that triggers when clicked)
    have the subtotal use a function that gets the total of the prices through the array 
*/
