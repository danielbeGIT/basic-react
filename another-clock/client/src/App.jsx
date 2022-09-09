// import { useState } from 'react';
import './App.css';
// import Clock from './component/Clock'
import Timer from './component/Timer'

const App = () => {
	/*
	const [showClock, setShowClock] = useState(false)
	const toggleClock = () => {
		setShowClock(!showClock)
	}
	*/

	return (
		/*
		<div className="container text-center">
			<button 
				id="toggle-clock" 
				className="btn btn-outline-light"
				onClick={toggleClock}
			>
				{showClock ? 'Hide Clock' : 'Show Clock'}

			</button>

			{showClock && (
				<div id="clock-wrapper" className='mt-3'>
					<Clock />
				</div>
			)}
		</div>
		*/

		<div className="container text-center">
			<Timer />
		</div>
	)
}

export default App;