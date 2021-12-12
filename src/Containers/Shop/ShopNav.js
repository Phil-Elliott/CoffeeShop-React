import React from "react"

const ShopNav = ({ changeArr, active }) => {
  return (
    <div className="shopNav">
      <p
        className={active === "All Items" ? "activeShop" : "none"}
        onClick={() => changeArr("All Items")}
        style={{ marginTop: "0" }}
      >
        See all items
      </p>
      <p
        className={active === "Coffee" ? "activeShop" : "none"}
        onClick={() => changeArr("Coffee")}
      >
        Coffee
      </p>
      <p
        className={active === "Equipment" ? "activeShop" : "none"}
        onClick={() => changeArr("Equipment")}
      >
        Equipment
      </p>
      <p
        className={active === "Mugs" ? "activeShop" : "none"}
        onClick={() => changeArr("Mugs")}
      >
        Mugs
      </p>
      <p
        className={active === "Gift Cards" ? "activeShop" : "none"}
        onClick={() => changeArr("Gift Cards")}
      >
        Gift Cards
      </p>
    </div>
  )
}

export default ShopNav
