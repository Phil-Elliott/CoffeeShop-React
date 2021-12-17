import React, { useState } from "react"
import { Badge } from "@material-ui/core"
import { ShoppingBasket } from "@mui/icons-material"
import useStyles from "./Styles"
import { Link } from "react-router-dom"

const Navigation = ({ totalItems }) => {
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
          <Badge className={classes.badge} badgeContent={totalItems}>
            <Link onClick={() => changeActive("active5")} to="/Cart">
              <ShoppingBasket className="shopping-icon" />
            </Link>
          </Badge>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
