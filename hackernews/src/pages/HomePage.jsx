import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContextProvider'

const HomePage = () => {
	const { isDarkTheme, theme, toggleTheme } = useThemeContext()

	/*
	const handleChangeTheme = () => {
		// if (theme === 'light') {
		// 	setTheme('dark')
		// } else {
		// 	setTheme('light')
		// }
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	*/

	return (
		<>
			<h1>Welcome to Hacker News!</h1>

			<Button variant="primary" as={Link} to="/search">Use the Search, you must</Button>

			<p>Your theme is: {theme}</p>

			<Button 
				onClick={toggleTheme}
				variant="success"
			>
				{isDarkTheme() ? 'Light' : 'Dark'}
			</Button>
		</>
	)
}

export default HomePage