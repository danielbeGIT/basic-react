import { useEffect, useState } from 'react'
import './App.css';
import AddNewTodoForm from './components/AddNewTodoForm';
import AlertInfo from './components/AlertInfo';
import TodoList from './components/TodoList';

const App = () => {
	const [todos, setTodos] = useState(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'))
		return storedTodos ?? []
			// ? storedTodos
			// : []
	})

	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

	const toggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter(todo => todo !== clickedTodo))
	}

	const handleAddNewTodo = (newTodoTitle) => {
		if (newTodoTitle.length < 2) {
			alert("Not good enough")
			return
		}

		const newTodo = { title: newTodoTitle, completed: false }
		setTodos([...todos, newTodo])
	}

	
	/*
	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// console.log("This will be executed once")

		
		// const localStorageTodos = localStorage.getItem('todos')

		// const storedTodos = localStorageTodos 
		// 	? JSON.parse(localStorageTodos)
		// 	: []

		
		const storedTodos = JSON.parse(localStorage.getItem('todos'))

		if (storedTodos) {
			setTodos(storedTodos)
		}
		
		console.log("Got todos from localStorage", storedTodos)
		
	}, [])
	// a empty dependency will make the useeffect only run once
	*/


	// Derive unfinishedTodos and finishedTodos from todos state
	// This will only be executed if 'todos' have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// Save new todos state to localStorage
		console.log("Updating localStorage with new todos..", todos)
		localStorage.setItem('todos', JSON.stringify(todos))

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
		<div id="app" className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<AddNewTodoForm 
					onAddNewTodo={handleAddNewTodo}
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
	)
}

export default App;