import React from "react"

const Top = () => {
  return (
    <div>
      <section id="top">
        <div className="container top-container">
          <div className="left-top">
            <img
              src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />
          </div>
          <div className="right-top">
            <h1>Enjoy Your Coffee</h1>
            <p>
              If you are looking for a good cup of coffee and a great place to
              drink it, then look no further.
            </p>
            <div className="buttons">
              <div className="button">
                <button>
                  <a
                    style={{ color: "white" }}
                    href="https://www.google.com/maps/place/730-702+E+Lombard+St,+Baltimore,+MD+21202/@39.2879229,-76.6084257,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89c803aed6f483b7:0x44896a84223e758!2sBaltimore,+MD!3b1!8m2!3d39.2903848!4d-76.6121893!3m4!1s0x89c80482b6ac7afd:0xdf16ca3f153a4b59!8m2!3d39.28792!4d-76.6062394"
                  >
                    Directions
                  </a>
                </button>
              </div>
              <div className="button">
                <button>
                  <a className="reviews-link" href="#reviews">
                    Reviews
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Top
