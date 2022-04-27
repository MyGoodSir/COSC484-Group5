import React from 'react';
//handles the strike out if item no longer needed
const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (

        <
        div class = "pntryHead" > < header > < h6 > test < /h6> </header > < /div>,


        <
        div id = { todo.id }



        key = { todo.id + todo.task }
        name = "todo"
        value = { todo.id }
        onClick = { handleClick }
        className = { todo.complete ? "todo strike" : "todo" } > { todo.task } <
        /div>
    );
};




export default ToDo;