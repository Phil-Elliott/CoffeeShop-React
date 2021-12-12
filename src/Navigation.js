import React, { useState } from "react"
import { FaMugHot, FaShoppingBag } from "react-icons/fa"

const Navigation = ({ changePage }) => {
  const [active, setActive] = useState("active1")

  // Shows the active button for the menu display
  const changeActive = (name) => {
    setActive(name)
  }

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-left">
          <FaMugHot className="coffee-icon nav-icon" />
          <h1>Quick Brew</h1>
        </div>
        <div className="nav-middle">
          <ul>
            <li onClick={() => changeActive("active1")}>
              <a
                href="#"
                className={active === "active1" ? "active" : "none"}
                onClick={() => changePage("home")}
              >
                Home
              </a>
            </li>
            <li onClick={() => changeActive("active2")}>
              <a
                href="#"
                onClick={() => changePage("events")}
                className={active === "active2" ? "active" : "none"}
              >
                Events
              </a>
            </li>
            <li onClick={() => changeActive("active3")}>
              <a
                href="#"
                onClick={() => changePage("menu")}
                className={active === "active3" ? "active" : "none"}
              >
                Menu
              </a>
            </li>
            <li onClick={() => changeActive("active4")}>
              <a
                href="#"
                onClick={() => changePage("shop")}
                className={active === "active4" ? "active" : "none"}
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="#" className="link" style={{ marginTop: ".2rem" }}>
            Sign In
          </a>
          <FaShoppingBag className="shopping-icon" />
        </div>
      </nav>
    </div>
  )
}

export default Navigation
