import React from "react"
import "./Events.scss"
import Next from "./Next.js"
import Upcoming from "./Upcoming.js"

const Events = () => {
  return (
    <div className="eventsContainer">
      <Next />
      <Upcoming />
    </div>
  )
}

export default Events