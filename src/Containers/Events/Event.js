import React from "react"

const Event = ({ time, event, description, pic }) => {
  return (
    <div className="bottom-events container">
      <div className="eventsTopLeft">
        <h2>
          <span>{event}</span>
        </h2>
        <h5 style={{ paddingLeft: ".5rem" }}>{time}</h5>
        <p>{description}</p>
      </div>
      <div className="eventsTopRight">
        <img className="imageContain" src={pic} alt="Coffee" />
      </div>
    </div>
  )
}

export default Event
