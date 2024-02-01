import { useDispatch } from "react-redux"
import { addTodo } from "../slices/todoSlice"
import { useState } from "react"

const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();//cada função do slice quando vou usar ela tem que dispartar elas enviar, que é oque esse hook faz

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim() === "") return; //caso o inout esteja vazio
        dispatch(addTodo(input));
        setInput("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        value={input} 
        type="text" 
        onChange={(e) => setInput(e.target.value)}
        placeholder='Adicione uma tarefa...' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default AddTodo