import { useEffect, useState } from 'react'
import './App.css'
import Forecast from './components/Forecast'
import SearchCity from './components/SearchCity'
import { getCurrentWeather } from './services/owmapi'

const App = () => {
	const [location, setLocation] = useState()
	const [currentWeather, setCurrentWeather] = useState()

	const handleSearch = (city) => {
		setLocation(city)
	}

	useEffect(() => {
		if (!location) {
			return
		}

		const fetchData = async () => {
			const data = await getCurrentWeather(location)
			setCurrentWeather(data)
		}
		fetchData()

	}, [location])

	return (
		<div id="app" className="container">
			<SearchCity onSearch={handleSearch} />

			{currentWeather && 
				<Forecast data={currentWeather} />
			}
		</div>
	)
}

export default App;