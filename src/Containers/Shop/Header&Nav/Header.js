import React from "react"

const Header = ({ headerName }) => {
  return (
    <div className="header-container">
      <h1 className="header-tittle">{headerName}</h1>
    </div>
  )
}

export default Header
