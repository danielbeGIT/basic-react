import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onToggleTodo,  onDeleteTodo }) => {
    return (
        <ul className="todolist">
            {
                todos.map((todo, index) =>
                    (
                        <TodoListItem 
                            todo={todo} 
                            key={index} 
                            onTitleClick={onToggleTodo} 
                            onDelete={onDeleteTodo}
                        />
                    )
                )
            }
        </ul>
    )
}

export default TodoList