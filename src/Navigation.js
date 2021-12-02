import React from 'react'
import { FaMugHot, FaShoppingBag } from 'react-icons/fa'

const Navigation = ({ changePage }) => {
	return ( 
		<div>
			<nav className="nav-container">
				<div className="nav-left">
					<FaMugHot className="coffee-icon nav-icon"/>
					<h1>Quick Brew</h1>
				</div>
				<div className="nav-middle">
					<ul className="">
						<li><a href="#" className="link active" onClick={() => changePage('home')}>Home</a></li>
						<li><a href="#" className="link" onClick={() => changePage('events')}>Events</a></li>
						<li><a href="#" className="link" onClick={() => changePage('menu')}>Menu</a></li>
					</ul>
				</div>
				<div className="nav-right">
					<a href="#" className="link" style={{marginTop:'.2rem'}}>Sign In</a>
					<FaShoppingBag className="shopping-icon"/>
				</div>
			</nav>
		</div>
	)
}

export default Navigation