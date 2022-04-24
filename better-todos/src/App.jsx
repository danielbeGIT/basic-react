import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import { Routes, Route} from 'react-router-dom'
import TodosPage from './pages/TodosPage'
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CreateTodoPage from './pages/CreateTodoPage'


const App = () => {

	return (
		// Can use <Container> if boostrap "Container" is imported instead of using div
		// Can use components instead of typing in <div className> etc
		<div  id="app">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route path="/todos/create" element={<CreateTodoPage />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;