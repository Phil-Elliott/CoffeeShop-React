import React, { useState } from "react"
import { FaMugHot } from "react-icons/fa"
import { Badge } from "@material-ui/core"
import { ShoppingBasket } from "@mui/icons-material"
import useStyles from "./Styles"

const Navigation = ({ changePage }) => {
  const [active, setActive] = useState("active1")
  const classes = useStyles()

  // Shows the active button for the menu display
  const changeActive = (name) => {
    setActive(name)
  }

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-left">
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
          <Badge className={classes.badge} badgeContent={4}>
            <ShoppingBasket
              className="shopping-icon"
              onClick={() => changePage("cart")}
            />
          </Badge>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
