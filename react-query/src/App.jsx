import { Routes, Route } from 'react-router-dom'
import './assets/scsss/App.scss'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import RandomDadJokePage from './pages/RandomDadJokePage'

const App = () => {
	return (
		<div id="App">
			<Navigation/>

			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/random-dad-joke" element={<RandomDadJokePage />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</div>
	)
}

export default App