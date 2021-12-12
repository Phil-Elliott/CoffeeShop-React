import React, { useState } from "react"
import "./Shop.scss"
import Header from "./Header"
import ShopNav from "./ShopNav"
import Items from "./Items"

const Shop = ({ addCartItems }) => {
  const [headerName, setHeaderName] = useState("All Items")
  const [active, setActive] = useState("All Items")
  const [newArr, setNewArr] = useState([
    {
      picture:
        "https://images.unsplash.com/photo-1619912922763-79c213e10263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description: "Costa Rica Blend",
      price: "$8.95",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1599637777203-34ac21aa929b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80",
      description: "Earlybird Light Roast",
      price: "$11.75",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1612213807634-ab190d1255e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80",
      description: "Partners Dark Roast",
      price: "$10.25",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      description: "Fill Me Up Mugs",
      price: "$14.85",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1623658179698-ec7b295754d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      description: "Signature Blend",
      price: "$8.60",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1542556398-3c9a71885fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      description: "Tea Mug",
      price: "$7.15",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1513127653385-eeaf744da067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Adventure Mug",
      price: "$10.99",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1599639900107-5096cd83c55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80",
      description: "Earlybird Espresso",
      price: "$11.50",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$25 Gift Card",
      price: "$25.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$50 Gift Card",
      price: "$50.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$100 Gift Card",
      price: "$100.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$200 Gift Card",
      price: "$200.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Hustle Mug",
      price: "$13.15",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1548940992-755ca0cc61b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description: "Latte Mug",
      price: "$12.50",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1616004620970-19db3345f3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
      description: "Coffee Time Mug",
      price: "$10.80",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      description: "Create Mug",
      price: "$12.25",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1573066516618-70e8e69506e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description: "Coffee Grinder",
      price: "$19.80",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1584544526507-fe87a18444f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      description: "French Press",
      price: "$22.99",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1592243503355-5183f4c8f689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      description: "Drip Pot",
      price: "$25.60",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      description: "Coffee Machine",
      price: "$28.55",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Stovetop Espresso",
      price: "$24.00",
      group: "Equipment",
    },
  ])

  const shopArray = [
    {
      picture:
        "https://images.unsplash.com/photo-1619912922763-79c213e10263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description: "Costa Rica Blend",
      price: "$8.95",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1599637777203-34ac21aa929b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80",
      description: "Earlybird Light Roast",
      price: "$11.75",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1612213807634-ab190d1255e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80",
      description: "Partners Dark Roast",
      price: "$10.25",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      description: "Fill Me Up Mugs",
      price: "$14.85",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1623658179698-ec7b295754d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      description: "Signature Blend",
      price: "$8.60",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1542556398-3c9a71885fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      description: "Tea Mug",
      price: "$7.15",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1513127653385-eeaf744da067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Adventure Mug",
      price: "$10.99",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1599639900107-5096cd83c55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80",
      description: "Earlybird Espresso",
      price: "$11.50",
      group: "Coffee",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$25 Gift Card",
      price: "$25.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$50 Gift Card",
      price: "$50.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$100 Gift Card",
      price: "$100.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      description: "$200 Gift Card",
      price: "$200.99",
      group: "Gift Cards",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Hustle Mug",
      price: "$13.15",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1548940992-755ca0cc61b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description: "Latte Mug",
      price: "$12.50",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1616004620970-19db3345f3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
      description: "Coffee Time Mug",
      price: "$10.80",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      description: "Create Mug",
      price: "$12.25",
      group: "Mugs",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1573066516618-70e8e69506e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description: "Coffee Grinder",
      price: "$19.80",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1584544526507-fe87a18444f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      description: "French Press",
      price: "$22.99",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1592243503355-5183f4c8f689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      description: "Drip Pot",
      price: "$25.60",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      description: "Coffee Machine",
      price: "$28.55",
      group: "Equipment",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Stovetop Espresso",
      price: "$24.00",
      group: "Equipment",
    },
  ]

  const changeArr = (name) => {
    setNewArr(
      name === "All Items"
        ? shopArray
        : shopArray.filter((item) => item.group === name)
    )
    setHeaderName(name)
    setActive(name)
  }

  return (
    <div className="container shop-container">
      <Header headerName={headerName} />
      <div className="shop-main">
        <div>
          <ShopNav changeArr={changeArr} active={active} />
        </div>
        <Items newArr={newArr} addCartItems={addCartItems} />
      </div>
    </div>
  )
}

export default Shop

/*
  functionality 
  2) Make selection bold (3rd)
  4) Order items by alphebet (4th)

  Style
  1) add border shadow 
  2) add a quick view of a clicker system to add items 
  3) create a shopping cart page 
*/
