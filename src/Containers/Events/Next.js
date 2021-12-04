const Next = () => {
  return (
    <div className="topMenuContainer topNextContainer container">
      <div className="menuTopRight">
        <img
          className="imageContain"
          src="https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Coffee"
        />
      </div>
      <div className="menuTopLeft" style={{ fontSize: "1.5rem" }}>
        <h2 style={{ margin: "0" }}>
          <span className="event-header">Events</span>
        </h2>
        <p>
          We have a different event every day of the week. Come and enjoy
          yourself with one of our delicous coffees. Tickets do go fast, so be
          sure to reserve a seat.
        </p>
      </div>
    </div>
  )
}

export default Next
