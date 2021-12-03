const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="top-about-container">
            <div className="left-about">
              <h2>From Seed to Cup</h2>
              <p>
                We search for the best quality beans around the world. We then
                take care of the roasting process on site. This guarentees that
                your coffee is always fresh and of the highest quality.
              </p>
            </div>
            <div className="right-about">
              <img src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            </div>
          </div>
          <div className="bottom-about-container">
            <h3>Our Brew Methods</h3>
            <div className="pics">
              <div className="left-pic">
                <img src="https://images.unsplash.com/photo-1545665206-b3e63670666e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
                <h5>Traditional</h5>
                <p>
                  Sometimes the best results come from the simplest actions.
                </p>
              </div>
              <div className="left-pic">
                <img src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1177&q=80" />
                <h5>Drip</h5>
                <p>
                  Perfect for someone who wants more caffeine and a vibrant
                  taste.
                </p>
              </div>
              <div className="left-pic">
                <img src="https://images.unsplash.com/photo-1570470752028-7b2cd13f44a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                <h5>Cold Brew</h5>
                <p>
                  Great for a hot day and for those who want something sweeter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
