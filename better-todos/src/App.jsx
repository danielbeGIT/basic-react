import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import { Routes, Route} from 'react-router-dom'
import TodosPage from './pages/TodosPage'
import Navigation from './components/Navigation';


const App = () => {

	return (
		// Can use <Container> if boostrap "Container" is imported instead of using div
		// Can use components instead of typing in <div className> etc
		<div  id="app">
			<Navigation />

			<Container>
				<Routes>
					<Route path="/" element={
						<p>Welcome Home.</p>
					} />
					<Route path="/todos" element={<TodosPage />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;