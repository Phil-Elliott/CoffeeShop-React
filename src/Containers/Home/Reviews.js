import React from 'react' 
import { FaUser } from 'react-icons/fa'

const Reviews = () => {
	return (
		<div>
			<section id="reviews">
				<div class="slider">
					<div class="review">
						<h5>We had such a great time at Quick Brew. The staff were very nice and the prices were also very good.</h5>
						<div class="user">
							<FaUser style={{margin: 'auto 0', paddingRight: '1rem'}}/>
							<h5>Emily</h5>
						</div>
					</div>
					<div class="review">
						<h5>It is honestly one of the best places to study and you can't beat the coffee.</h5>
						<div class="user">
							<FaUser style={{margin: 'auto 0', paddingRight: '1rem'}}/>
							<h5>Tim</h5>
						</div>
					</div>
					<div class="review">
						<h5>The best coffee shop in town. I will definitely be going back again soon.</h5>
						<div class="user">
							<FaUser style={{margin: 'auto 0', paddingRight: '1rem'}}/>
							<h5>Sam</h5>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Reviews