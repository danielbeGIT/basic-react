import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import { useThemeContext } from './contexts/ThemeContextProvider'
import FetchPage from './pages/FetchPage'
import HomePage from './pages/HomePage'
import SearchHackerNews from './pages/SearchHackerNews'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
	const { getStyle } = useThemeContext()

	return (
		<div id="App" className={getStyle()}>
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/fetch" element={<FetchPage />} />
					<Route path="/search" element={<SearchHackerNews />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App