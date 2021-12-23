import React, { useState } from "react"
import { Badge } from "@material-ui/core"
import { ShoppingBasket } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Navigation = ({ totalItems }) => {
  const [active, setActive] = useState("active1")
  const [navClass, setNavClass] = useState("nav-nav")

  // Shows the active button for the menu display
  const changeActive = (name) => {
    setActive(name)
  }

  // Changes the nav to hamburger menu based off of page size
  const changeClass = () => {
    navClass === "nav-nav"
      ? setNavClass("nav-nav active-nav")
      : setNavClass("nav-nav")
  }

  return (
    <div>
      <nav className="nav-container">
        <button href="#" className="toggle-button" onClick={changeClass}>
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
        <div className="nav-left">
          <h1>Quick Brew</h1>
        </div>
        <div className="nav-middle">
          <ul className={navClass}>
            <li onClick={() => changeActive("active1")}>
              <Link className={active === "active1" ? "active" : "none"} to="/">
                Home
              </Link>
            </li>
            <li onClick={() => changeActive("active2")}>
              <Link
                className={active === "active2" ? "active" : "none"}
                to="/Events"
              >
                Events
              </Link>
            </li>
            <li onClick={() => changeActive("active3")}>
              <Link
                className={active === "active3" ? "active" : "none"}
                to="/Menu"
              >
                Menu
              </Link>
            </li>
            <li onClick={() => changeActive("active4")}>
              <Link
                className={active === "active4" ? "active" : "none"}
                to="/Shop"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link onClick={() => changeActive("active5")} to="/Cart">
            <ShoppingBasket className="shopping-icon" />
          </Link>
          <p>{totalItems}</p>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
