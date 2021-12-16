import React from "react"
import "./Home.scss"
import Top from "./Content/Top"
import About from "./Content/About"
import Area from "./Content/Area"
import Reviews from "./Content/Reviews/Reviews"

const Home = () => {
  return (
    <div>
      <Top />
      <About />
      <Area />
      <Reviews />
    </div>
  )
}

export default Home
