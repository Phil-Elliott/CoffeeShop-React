const About = () => {
  return (
    <div>
      <section id="about">
        <div>
          <div className="top-about-container container">
            <div className="left-about">
              <h2>From Seed to Cup</h2>
              <p>
                We search for the best quality beans around the world. We then
                take care of the roasting process on site. This guarentees that
                your coffee is always fresh and of the highest quality.
              </p>
            </div>
            <div className="right-about">
              <img
                src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="img"
              />
            </div>
          </div>
          <div className="bottom-about-container">
            <div className="container">
              <h3>Our Brew Methods</h3>
              <div className="pics">
                <div className="left-pic">
                  <div className="writing-container">
                    <h5>Traditional</h5>
                    <p>
                      Sometimes the best results come from the simplest actions.
                    </p>
                  </div>
                </div>
                <div className="middle-pic">
                  <div className="writing-container">
                    <h5>Drip</h5>
                    <p>
                      Perfect for someone who wants more caffeine and a vibrant
                      taste.
                    </p>
                  </div>
                </div>
                <div className="right-pic">
                  <div className="writing-container">
                    <h5>Cold Brew</h5>
                    <p>
                      Great for a hot day and for those who want something
                      sweeter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
