import React, { useState } from "react"
import "./App.scss"
import Navigation from "./Containers/Nav&Footer/Navigation"
import Footer from "./Containers/Nav&Footer/Footer"
import Home from "./Containers/Home/Home"
import Events from "./Containers/Events/Events"
import Menu from "./Containers/Menu/Menu"
import Shop from "./Containers/Shop/Shop"
import Cart from "./Containers/Cart/Cart"

const App = () => {
  const [page, setPage] = useState("home")
  const [cartItems, setCartItems] = useState([])

  // Used to change content on the page
  const changePage = (name) => {
    setPage(name)
  }

  // Used to add items to the cart
  const addCartItems = (details) => {
    setCartItems([...cartItems, details])
  }

  return (
    <div>
      <Navigation changePage={changePage} />
      {page === "home" ? (
        <Home />
      ) : page === "events" ? (
        <Events />
      ) : page === "shop" ? (
        <Shop addCartItems={addCartItems} />
      ) : page === "menu" ? (
        <Menu />
      ) : (
        <Cart cartItems={cartItems} />
      )}
      <Footer />
    </div>
  )
}

export default App
