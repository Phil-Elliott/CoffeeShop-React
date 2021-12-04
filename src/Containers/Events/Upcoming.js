const Upcoming = () => {
  return (
    <div className="events-bottom">
      <div className="bottom-events container">
        <div className="eventsTopLeft">
          <h5>Friday's 7PM - 9PM</h5>
          <h2>Live Music</h2>
          <p>
            Nothing is better than live music after a long day. Come and enjoy
            your Friday's with us.
          </p>
          <div className="buttons">
            <div className="button">
              <button>
                <a style={{ color: "white" }}>Reserve</a>
              </button>
              <p>2 Seats Left</p>
            </div>
          </div>
        </div>
        <div className="eventsTopRight">
          <img
            className="imageContain"
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Coffee"
          />
        </div>
      </div>
    </div>
  )
}

export default Upcoming
