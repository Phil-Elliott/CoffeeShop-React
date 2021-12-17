import React from "react"
import { FaUser, FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Review = ({ text, user, changeReviewRight, changeReviewLeft }) => {
  return (
    <div>
      <section id="reviews">
        <div class="slider">
          <FaAngleLeft
            className="clickers"
            style={{ paddingRight: ".5rem" }}
            onClick={changeReviewLeft}
          />
          <div class="review">
            <p>{text}</p>
            <div class="user">
              <FaUser style={{ margin: "auto 0", paddingRight: "1rem" }} />
              <h5>{user}</h5>
            </div>
          </div>
          <FaAngleRight
            className="clickers"
            style={{ paddingLeft: ".5rem" }}
            onClick={changeReviewRight}
          />
        </div>
      </section>
    </div>
  )
}

export default Review
