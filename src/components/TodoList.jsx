import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo, removeTodo, filtersTodos } from '../slices/todoSlice';

const TodoList = () => {

  const {list, filter} = useSelector((state) => state.todos) //pegando os estados através do useSelector(tipo useState)

    const dispatch = useDispatch();

  const filteredList = list.filter((todo) => {
    if(filter === "all") return true;
    if(filter === "completed") return todo.completed;
    if(filter === "incompleted") return !todo.completed;
    return true;//para atrapalhar o algoritimo caso o resultado seja outro
  })
  return (
    <div>
      <button onClick={() => dispatch(filtersTodos("all"))}>Todas</button>
      <button onClick={() => dispatch(filtersTodos("completed"))}>Completas</button>
      <button onClick={() => dispatch(filtersTodos("incompleted"))}>Incompletas</button>
      <ul>
        {filteredList.map((todo) => (
          <li key={todo.id}>
          <span 
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={todo.completed ? "line-through" : null}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList