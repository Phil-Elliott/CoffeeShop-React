import React from "react"
import { ShoppingBasket } from "@mui/icons-material"

const Card = ({ product, onAddToCart }) => {
  return (
    <div>
      <div className="item-card">
        <div className="card-top">
          <div className="item-img-container">
            <img src={product.image.url} alt="item" />
          </div>
        </div>
        <div className="card-bottom">
          <h3 className="card-description">{product.name}</h3>
          <div className="buy-item">
            <h3 className="card-price">
              {product.price.formatted_with_symbol}
            </h3>
            <ShoppingBasket
              className="add-basket"
              onClick={() => onAddToCart(product.id, 1)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
