import React, { useState } from 'react'
import './App.css'

function App() {
	const [name, setName] = useState('Jerry')

	return (
		<div className='App'>
			<h1>Home {name} This is a test</h1>
		</div>
	)
}

export default App
