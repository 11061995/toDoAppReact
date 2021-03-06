import React from "react";

const Todo = ( {text,todo, setTodos, todos}) => {
    //events
    const deletHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        //console.log(todo);
    };
    const completeHandler = () => {
      setTodos(todos.map(item => {
        if(item.id === todo.id){
          return{
            ...item, completed: !item.completed,
          };
        }
        return item;
      })
      );
    };
    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fa fa-check"></i>
        </button>
        <button onClick={deletHandler} className="trash-btn">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
};

export default Todo;