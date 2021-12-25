import React from 'react'
import './TodoItem.css'

export default function TooItem({ item, handleChange, handleDelete, handleFilter }) {
   
    const completedItemStyle = {
        fontStyle: 'italic',
        color: 'lightblue',
        textDecoration: 'line-through'
    }
    const itemStyle = {
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
    }

    return (
        <div className='todo-item'>
            <input
                type='checkbox' 
                checked={item.completed}
                onChange={() => handleChange(item.id)}
                style={{cursor: 'pointer'}}
                
                />
            <p style={item.completed ? completedItemStyle : itemStyle}>{item.text}</p>
            
            <span style={{marginLeft: '0.75rem', cursor:'pointer'}}>
                <i 
                key={item.id} className="far fa-times-circle"
                onClick={() => handleDelete(item.id)}></i>
            </span>
        </div>
    )
}

