import React from 'react';
//import componnet
import Todo from './Todo'

const ToDoList = ({ todos, setTodos, filteredtodos }) => {
  //console.log(filteredtodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredtodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;