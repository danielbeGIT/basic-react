import { useEffect, useState } from 'react'
import TodosAPI from '../services/TodosAPI'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const TodosPage = () => {
	const [todos, setTodos] = useState([])
	// const [unfinishedTodos, setUnfinishedTodos] = useState([])
	// const [finishedTodos, setFinishedTodos] = useState([])

	// get todos from api
	const getTodos = async () => {
		// Get todos from api
		const data = await TodosAPI.getTodos()

		// sort alphabetically by title
		data.sort((a,b) => a.title.localeCompare(b.title))

		// sort by completed status
		data.sort((a,b) => a.completed - b.completed)

		// update todos state
		setTodos(data)
	}

	// get todos from api when component is first mounted
	useEffect(() => {
		getTodos()
	}, [])
	// a empty dependency will make the useeffect only run once

	return (
		<>
			<h1>Todos</h1>

			{todos.length > 0 && (
				<ListGroup className="todolist">
					{todos.map(todo =>
						<ListGroup.Item
							action
							as={Link}
							className={todo.completed ? 'done' : ''}
							key={todo.id}
							to={`/todos/${todo.id}`}
						>
							{todo.title}
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

			{todos.length === 0 && (
				<p className="status">No todos 🥳!</p>
			)}
		</>
	)
}

export default TodosPage;