
//Todo 

function Todos() {
    //console.log(this.props.todos)

  return(
    
    
    this.props.todos.map((todo) => (
        <h3> {todo.title} </h3>
    ))


  //   <div>
  //     <h1>Todos from Todos.js</h1>
  //   </div>
  );
}

export default Todos;
