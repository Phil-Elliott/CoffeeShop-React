import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div>
				<h5>Location</h5>
				<p>Downtown Seattle</p>
			</div>
			<div>
				<h5>Phone</h5>
				<p>434-321-4567</p>
			</div>
			<div>
				<h5>Email</h5>
				<p>QuickBrew@gmail.com</p>
			</div>
			<div className='socials'>
				<FaFacebook className='social'/>
				<FaTwitter className='social'/>
				<FaInstagram className='social'/>
				<FaPinterest className='social'/>
			</div>
		</div>
	)
}

export default Footer

/* 
	social media buttons as well
*/