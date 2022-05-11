import { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContextProvider'

const Navigation = () => {
	const { isDarkTheme, toggleTheme} = useContext(ThemeContext)

	return (
		<Navbar 
			bg={isDarkTheme() ? 'light' : 'dark'} 
			variant={isDarkTheme() ? 'light' : 'dark'} 
			expand="md"
		>
			<Container>
				<Navbar.Brand as={Link} to="/">Hacker News</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/search">Search</Nav.Link>
						<Button 
							onClick={toggleTheme}
							variant="outline-secondary"
						>
							{isDarkTheme() ? '🌞' : '🌙'}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation