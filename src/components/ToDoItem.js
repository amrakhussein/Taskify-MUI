import React from 'react'
import './ToDoItem.css'

export default function ToDoItem(props) {
    // console.log(props)
    const completedItemStyle = {
        fontStyle: 'italic',
        color: 'lightblue',
        textDecoration: 'line-through'
    }
    return (
        <div className='todo-item'>
            <input
                type='checkbox' 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
                
            />
            <p style={props.item.completed ? completedItemStyle : null}>{props.item.text}</p>
        </div>
    )
}
