import { useEffect, useState } from 'react'
import './assets/scss/App.scss'
import 'bootstrap/scss/bootstrap.scss'
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

			<div className="article">
				<div className="article-heading">
					<h2>My Article Heading</h2>
				</div>

				<h2>My subheader</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus totam, temporibus, voluptate, rerum esse illo qui sed ex odit expedita optio! Quidem ipsa optio tenetur, hic praesentium fugiat ea.</p>

				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ex assumenda consequuntur in sint perspiciatis esse sed nisi voluptate nulla, ad distinctio voluptas error illum incidunt, a sit earum laborum.</p>

				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique illo, nam ea neque veniam harum et earum temporibus aperiam totam dignissimos at ipsa. Est officiis illo laboriosam perferendis voluptate.</p>
			</div>

			{currentWeather && 
				<Forecast data={currentWeather} />
			}
		</div>
	)
}

export default App;