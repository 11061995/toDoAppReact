import React, {useState, useEffect} from 'react';
import './App.css';
//importing components
import Form from './component/Form'
import ToDoList  from './component/ToDoList';

function App() {
  //State Stuff
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredtodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  //RUN ONCE WHEN APP START
  useEffect(()=>{
    getLocalTodos();
  }, []);
  useEffect(() => { 
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions & events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
      console.log(todoLocal);
    }
  };

  //console.log(filteredtodos);
  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredtodos={filteredtodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
