/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'


/**
 * Get all todos
 */
const getTodos = async () => {
    const res = await axios.get(`${BASE_URL}/todos`)
    return res.data
}

/**
 * Create a new todo
 * 
 * @param data Object with properties and values for the new todo
 */
 const createTodos = async (data) => {
    const res = await axios.post(`${BASE_URL}/todos`, data)
    return res.data
}

/**
 * Delete a todo
 * 
 * @param todo_id Todo to delet
 */
 const deleteTodos = async (todo_id) => {
    const res = await axios.delete(`${BASE_URL}/todos/${todo_id}`)
    return res.data
}

/**
 * Update a todo
 * 
 * @param todo_id Todo ID to update
 * @param data Data to update todo with
 */
 const updateTodos = async (todo_id, data) => {
    const res = await axios.patch(`${BASE_URL}/todos/${todo_id}`, data)
    return res.data
}

const actions = {
    getTodos,
    createTodos,
    deleteTodos,
    updateTodos
}

export default actions