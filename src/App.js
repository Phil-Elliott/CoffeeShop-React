import React, { useState, useEffect } from "react"
import "./App.scss"
import { commerce } from "./lib/commerce"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "./Containers/Cart/Cart"
import Checkout from "./Containers/Checkout/Checkout"
import Events from "./Containers/Events/Events"
import Footer from "./Containers/Nav&Footer/Footer"
import Home from "./Containers/Home/Home"
import Menu from "./Containers/Menu/Menu"
import Navigation from "./Containers/Nav&Footer/Navigation"
import Shop from "./Containers/Shop/Shop"

const App = () => {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  // Fetches products from commerce.js
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  // Fetches cartProducts from commerce.js
  const fetchCart = async () => {
    setCartProducts(await commerce.cart.retrieve())
  }

  // Used to add items to the cartProducts
  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity)

    setCartProducts(response.cart)
  }

  // Used to update the quantity of the cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })

    setCartProducts(cart)
  }

  // Used to remove items from the cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCartProducts(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCartProducts(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  // Fetces all data on mount
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <Router>
      <div>
        <Navigation totalItems={cartProducts.total_items} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Events" element={<Events />} />
          <Route
            exact
            path="/Shop"
            element={<Shop products={products} onAddToCart={handleAddToCart} />}
          />
          <Route exact path="/Menu" element={<Menu />} />
          <Route
            exact
            path="/Cart"
            element={
              <Cart
                cartProducts={cartProducts}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            exact
            path="/Checkout"
            element={
              <Checkout
                cartProducts={cartProducts}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
