  import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"
function App() {
  //state
  const [inputText, setInputText] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [date, setDate] = useState(" ");
  const [priority, setPriority] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [todosDetails, setTodosDetails] = useState([]);
  const [status, setStatus] = useState("all");
  // status is the filter for all todo, competed or not, sorted by priority 
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  //functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const getLocalTodos = () => {

    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);

    }
  }
  return (
    <div className="App">
      <header>
        <h1> Abhishek's Todo App </h1>
      </header>
      <Form 
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}
        setStatus={setStatus}
        todosDetails={todosDetails}
        setTodosDetails={setTodosDetails} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} />
      <TodoList 
        filteredTodos={filteredTodos} 
        todos={todos} 
        setTodos={setTodos} />
    </div>
  );
}

export default App;
