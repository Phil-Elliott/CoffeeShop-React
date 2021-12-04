const Upcoming = () => {
  return (
    <div className="events-bottom">
      <div
        className="topMenuContainer container"
        style={{ background: "#dbdbdb", color: "black" }}
      >
        <div className="menuTopLeft">
          <h4>Friday's 7PM - 9PM</h4>
          <h2>Live Music</h2>
          <p>
            Nothing is better than live music after a long day. Come and enjoy
            your Friday's with us.
          </p>
          <div className="buttons">
            <div className="button">
              <button style={{ background: "#5d5d5f" }}>
                <a style={{ color: "white" }} href="#">
                  Reserve
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="menuTopRight">
          <img
            className="imageContain"
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Coffee"
          />
        </div>
      </div>
    </div>
  )
}

export default Upcoming
