import React from 'react'

export default function Header({count}) {
    const displayHeading = () => {
        const showTasks = <h2>you have {count} tasks to finish.. </h2>
        const showMessage = <h2>let's make a task!</h2>
        return count !== 0 ? showTasks : showMessage
    }

    return (
        <>
            {displayHeading()}
        </>
    )
}
