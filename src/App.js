import React, { useState } from 'react'
import './App.scss'
import Navigation from './Navigation'
import Home from './Containers/Home/Home'
import Events from './Containers/Events/Events'
import Menu from './Containers/Menu/Menu'

const App = () => {
	const [page, setPage] = useState('home')

	const changePage = (name) => {
		setPage(name)
	}

	return (
		<div>
			<Navigation changePage={changePage}/>
			{(page === 'home') ? <Home /> : ((page === 'events') ? <Events /> : <Menu />)}
		</div>
	)
}


export default App