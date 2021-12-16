import React from "react"
import "./Events.scss"
import Top from "./Top.js"
import BottomEvents from "./BottomEvents/BottomEvents.js"

const Events = () => {
  return (
    <div className="eventsContainer">
      <Top />
      <BottomEvents />
    </div>
  )
}

export default Events
