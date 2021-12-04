import React from "react"

const Event = ({ time, event, description, pic }) => {
  return (
    <div className="bottom-events container">
      <div className="eventsTopLeft">
        <h5>{time}</h5>
        <h2>
          <span>{event}</span>
        </h2>
        <p>{description}</p>
      </div>
      <div className="eventsTopRight">
        <img className="imageContain" src={pic} alt="Coffee" />
      </div>
    </div>
  )
}

export default Event
