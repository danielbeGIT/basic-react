import { useEffect, useState } from 'react'
import './App.css';
import AddNewTodoForm from './components/AddNewTodoForm';
import TodoListItem from './components/TodoListItem';

const App = () => {
	const [todos, setTodos] = useState([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])

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

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("This will be executed once")
	}, [])
	// a empty dependency will make the useeffect only run once

	// Derive unfinishedTodos and finishedTodods from todos state
	// This will only be executed if 'todos' have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
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
						<ul className="todolist">
							{
								unfinishedTodos.map((todo, index) =>
									(
										<TodoListItem 
											todo={todo} 
											key={index} 
											onTitleClick={toggleTodo} 
											onDelete={deleteTodo}
										/>
									)
								)
							}
						</ul>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<ul className="todolist">
								{
									finishedTodos.map((todo, index) =>
										(
											<TodoListItem 
												todo={todo} 
												key={index} 
												onTitleClick={toggleTodo} 
												onDelete={deleteTodo}
											/>
										)
									)
								}
							</ul>
						</>
					)}

					<p className="status">
						{finishedTodos.length} av {todos.length} todos avklarade
					</p>

				</>
			)}
		</div>
	)
}

export default App;