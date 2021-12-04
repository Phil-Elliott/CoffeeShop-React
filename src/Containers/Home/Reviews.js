import React, { useState } from "react"
import Review from "./Review"

const Reviews = () => {
  const [rev, setRev] = useState(0)

  const changeReviewRight = () => {
    if (rev > 3) {
      setRev(0)
    } else {
      setRev(rev + 1)
    }
  }

  const changeReviewLeft = () => {
    if (rev < 0) {
      setRev(3)
    } else {
      setRev(rev - 1)
    }
  }

  const reviewArray = [
    {
      text: "We had such a great time at Quick Brew. The staff were very nice and the prices were also very good.",
      user: "Emily",
    },
    {
      text: "Excellent coffee shop. Will definitely be going back soon. The staff were very helpful and fast",
      user: "Sam",
    },
    {
      text: "Had a blast learning to dance salsa. They always have the best events. It is a great way to meet some new people.",
      user: "Anna",
    },
    {
      text: "They have some of the best coffee in town. They also have incredible tea, which is a rare find. ",
      user: "Sierra",
    },
    {
      text: "Go for the coffee, stay for the vibe. It is such a chill place and everything is of the highest quality",
      user: "Todd",
    },
  ]

  return (
    <div>
      <Review
        text={reviewArray[rev].text}
        user={reviewArray[rev].user}
        changeReviewRight={changeReviewRight}
        changeReviewLeft={changeReviewLeft}
      />
    </div>
  )
}

export default Reviews
