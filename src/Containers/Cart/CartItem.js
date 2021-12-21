import React from "react"
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <FaTimes
          className="cart-icons"
          onClick={() => handleRemoveFromCart(item.id)}
        />
        <img src={item.image.url} alt="pic" />
        <p>{item.name}</p>
      </div>
      <div className="quantity">
        <FaMinus
          className="cart-icons"
          onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
        />
        <p>{item.quantity}</p>
        <FaPlus
          className="cart-icons"
          onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
        />
      </div>
      <p>{item.line_total.formatted_with_symbol}</p>
    </div>
  )
}

export default CartItem
