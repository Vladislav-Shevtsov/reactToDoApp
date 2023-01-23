//This class is to display the todo list 

import React from "react";

function TodoList({todo,setTodo}){
    //check all props received
    //console.log(todo)
    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id !=id)
        setTodo(newTodo)
         //console.log("delete")
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)

    }
    return(
        <div>
            {
            todo.map(item => (
                <div key={item.id}>

                <div>{item.title}</div>
                <button onClick={()=> deleteTodo(item.id)}>Удалить</button>
                <button onClick={()=> statusTodo(item.id)}>Закрыть / Открыть</button>

                </div>
            ))
        }
        </div>
           
    );

}

export default TodoList;