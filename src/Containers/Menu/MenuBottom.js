import React, { useEffect, useState } from "react"
import CoffeeMenu from "./CoffeeMenu"

const MenuBottom = () => {
  const [list, setList] = useState([])
  const [active, setActive] = useState("active1")

  //These are the arrays for the menu
  const coffeeArray = [
    {
      item: "Home Brew",
      price: "$2.50",
      description: "Our famous home brewed coffee",
    },
    {
      item: "Drip Coffee",
      price: "$3.00",
      description: "Hot coffee made by drip",
    },
    {
      item: "Expresson Brew",
      price: "$2.80",
      description: "A drink to get you going",
    },
    {
      item: "Americano",
      price: "$2.50",
      description: "You can't go wrong with this classic",
    },
    {
      item: "Latte",
      price: "$3.75",
      description: "Perfect for any day",
    },
    {
      item: "Cappuccino ",
      price: "$3.50",
      description: "Strong and foamy",
    },
    {
      item: "Iced Coffee",
      price: "$2.75",
      description: "Great choice for a hot day",
    },
    {
      item: "Frapacino",
      price: "$4.00",
      description: "if you are looking for something cold and sweet",
    },
  ]
  const teaArray = [
    {
      item: "Green Tea",
      price: "$1.50",
      description: "Mix it up with this classic",
    },
    {
      item: "Black Tea",
      price: "$1.60",
      description: "Tired of coffee, but need some energy",
    },
    {
      item: "Fruit Tea",
      price: "$1.80",
      description: "Be sure to add some honey",
    },
    {
      item: "Milk Tea",
      price: "$2.25",
      description: "Perfect for a hot day",
    },
    {
      item: "Green Tea Latte",
      price: "$2.75",
      description: "What a great combination",
    },
  ]
  const otherArray = [
    {
      item: "Water",
      price: "$1.00",
      description: "Sometimes you just need to hydrate",
    },
    {
      item: "Hot Chocolate",
      price: "$1.80",
      description: "The drink of winter",
    },
    {
      item: "Irish Coffee",
      price: "$4.50",
      description: "Do you need something a little stronger",
    },
  ]
  const dessertArray = [
    {
      item: "Cake",
      price: "$1.60",
      description: "Not just for birthdays",
    },
    {
      item: "Muffin",
      price: "$1.25",
      description: "The perfect snack to complement your coffee",
    },
    {
      item: "Cookie",
      price: "$1.00",
      description: "Made fresh everyday",
    },
    {
      item: "Biscotti",
      price: "$1.40",
      description: "Such a delicious snack",
    },
  ]

  // Changes the list displayed on the menu
  const changeList = (name) => {
    if (name === "coffee") {
      setList(coffeeArray)
    } else if (name === "tea") {
      setList(teaArray)
    } else if (name === "other") {
      setList(otherArray)
    } else if (name === "dessert") {
      setList(dessertArray)
    }
  }

  // Shows the active button for the menu display
  const changeActive = (name) => {
    setActive(name)
  }

  //Start the page with the coffee menu display
  useEffect(() => {
    changeList("coffee")
  }, [])

  return (
    <div className="bottom-menu-container">
      <div className="menuHeading">
        <h1>Our Menu</h1>
        <ul>
          <li onClick={() => changeList("coffee")}>
            <span
              className={active === "active1" ? "active" : "none"}
              onClick={() => changeActive("active1")}
            >
              Coffee
            </span>
          </li>
          <li onClick={() => changeList("tea")}>
            <span
              className={active === "active2" ? "active" : "none"}
              onClick={() => changeActive("active2")}
            >
              Tea
            </span>
          </li>
          <li onClick={() => changeList("other")}>
            <span
              className={active === "active3" ? "active" : "none"}
              onClick={() => changeActive("active3")}
            >
              Other
            </span>
          </li>
          <li onClick={() => changeList("dessert")}>
            <span
              className={active === "active4" ? "active" : "none"}
              onClick={() => changeActive("active4")}
            >
              Dessert
            </span>
          </li>
        </ul>
      </div>
      <CoffeeMenu list={list} />
    </div>
  )
}

export default MenuBottom
