import React from "react";
import { useState } from "react";


function AddTodo({todo,setTodo}){

    const [value, setValue] = useState('')
    console.log(value)

    function saveTodo(){
        setTodo(
            [...todo,{
                id:4,
                title: value,
                completed: true
            }]
        )


    }

    return(
    <div>
        <input placeholder ='введите задачу' value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick ={saveTodo}>Сохранить</button>
    </div>);
    
}

export default AddTodo;