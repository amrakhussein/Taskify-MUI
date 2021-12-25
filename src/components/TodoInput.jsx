import React, {useState} from 'react'

export default function ToDoInput({ addTodo }) {
    const [input, setInput] = useState('')
    const handleInput = evt => setInput(evt.target.value)
    const handleSubmit = evt => {
        evt.preventDefault()
        addTodo(input)
        setInput('')
    }
    return (
        <>
        <form onSubmit={handleSubmit} style={{margin: '1rem'}}>
            <input value={input} placeholder="Write Something..." type="text" onChange={handleInput}/>
            <button type='submit'>Enter Task</button>
        </form>
        </>
    )
}