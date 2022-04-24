import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
			<Container>
				{/* Wont rerender/reload page with as={Link} to="" */}
				<Navbar.Brand as={Link} to="/">Better Todos</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{/* add end after or before the to="" to move all links being active */}
						<Nav.Link as={NavLink} to="/todos" end>Todos</Nav.Link>
						<Nav.Link as={NavLink} to="/todos/create">Create Todos</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation