import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AddNewTodoForm from './components/AddNewTodoForm';
import AlertInfo from './components/AlertInfo';
import TodoList from './components/TodoList';
import TodosAPI from './services/TodosAPI'

const App = () => {
	const [todos, setTodos] = useState([])
	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

	// get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

	// Create a new todo in API
	const createTodo = async (newTodo) => {
		// newTodo = { title: "", completed: false }

		await TodosAPI.createTodo(newTodo)
		getTodos()

		// setTodos([...todos, newTodo])
	}

	// Delete a todo in the API
	const deleteTodo = async (todo) => {
		await TodosAPI.deleteTodo(todo.id)
		getTodos()

		// setTodos(todos.filter(todo => todo !== clickedTodo))
	}

	// Toggle the completed status of todo in the API
	const toggleTodo = async (todo) => {
		// implement what data to update/patch
		const data = {
			completed: !todo.completed
		}
		await TodosAPI.updateTodo(todo.id, data)
		getTodos()

		// todo.completed = !todo.completed
		// setTodos([...todos])
	}

	// get todos from api when component is first mounted
	useEffect(() => {
		getTodos()
	}, [])
	// a empty dependency will make the useeffect only run once

	// Derive unfinishedTodos and finishedTodos from todos state
	// This will only be executed if 'todos' have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// Save new todos state to localStorage
		// console.log("Updating localStorage with new todos..", todos)
		// localStorage.setItem('todos', JSON.stringify(todos))

		// console.log("Updating todos")
		setUnfinishedTodos(todos.filter(todo => !todo.completed))
		setFinishedTodos(todos.filter(todo => todo.completed))
	}, [todos])

	// This will only be executed if 'finishedTodos' OR 'todos' have changed,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// This will be executed _after_ *each* render
		// console.log("Updating page title")
		document.title = `${finishedTodos.length}/${todos.length} completed`
	}, [finishedTodos, todos])
	// a dependency on todos so it wont update until something changes in todos

	return (
		// Can use <Container> if boostrap "Container" is imported instead of using div
		// Can use components instead of typing in <div className> etc
		// <Container>
		<div id="app" className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<AddNewTodoForm 
					onAddNewTodo={createTodo}
				/>
			</div>

			{todos.length > 0 && (
				<>
					{unfinishedTodos.length > 0 && (
						<TodoList 
							todos={unfinishedTodos} 
							onToggleTodo={toggleTodo}
							onDeleteTodo={deleteTodo}
						/>
					)}

					{unfinishedTodos.length === 0 && (
						<>
						<AlertInfo>
							<h2 className="text-center">No todos</h2>
							<p>You all <strong>good</strong>!</p>
							<img src="https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif" alt="No todos" className="img-fluid"/>
						</AlertInfo>
						</>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<TodoList 
								todos={finishedTodos} 
								onToggleTodo={toggleTodo}
								onDeleteTodo={deleteTodo}
							/>
						</>
					)}

					<p className="status">
						{finishedTodos.length} av {todos.length} todos avklarade
					</p>

				</>
			)}

			{todos.length === 0 && (
				<>
					<AlertInfo>
						Move on.
					</AlertInfo>
				</>
			)}
		</div>
		// </Container>
	)
}

export default App;