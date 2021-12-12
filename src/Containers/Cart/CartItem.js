const CartItem = ({ picture, description, price }) => {
  return (
    <div>
      <img src={picture} alt="pic" />
      <h1>{description}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default CartItem
