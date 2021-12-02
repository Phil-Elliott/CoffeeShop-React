import React from 'react'
import './Home.scss'
import Top from './Top'
import About from './About'
import Area from './Area'
import Reviews from './Reviews'
import Footer from './Footer'

const Home = () => {
	return (
		<div>
			<Top />
			<About />
			<Area />
			<Reviews />
			<Footer />
		</div>
	)
}

export default Home