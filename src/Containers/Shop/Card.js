import React from "react"

const Card = ({ picture, description, price }) => {
  return (
    <div>
      <div className="item-card">
        <div className="card-top">
          <div className="item-img-container">
            <img src={picture} alt="item" />
          </div>
        </div>
        <div className="card-bottom">
          <h3 className="card-description">{description}</h3>
          <div className="buy-item">
            <h3 className="card-price">{price}</h3>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
