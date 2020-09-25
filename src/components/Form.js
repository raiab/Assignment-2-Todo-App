import React,{useState} from "react";
import PopUpForm from "./PopUpForm";
const Form = ({ inputText, setInputText, todosDetails, setTodosDetails, todos, setTodos ,setStatus}) => {
  //props
  const newId=Math.floor(Math.random() * 1000000); // there might be collision
  const [clickedCounter,setClickedCounter]=useState(0);
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    console.log("newId="+newId);
    console.log("clickedCounter= "+clickedCounter);
    e.preventDefault(); // stops browser from refreshing
    setTodos([...todos,
    { text: inputText, completed: false, id: newId }
    ]);
    setClickedCounter(clickedCounter+1);
    setInputText("");
  };
  const statusHandler=(e)=>{
    setStatus(e.target.value)
  }
  return (
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" />
      <button 
        onClick={submitTodoHandler}
        className="todo-button" 
        type="submit"> 
           <i className="fas fa-plus-square"></i>
      </button>
      {
        clickedCounter!==0?<PopUpForm todosDetails={todosDetails} setTodosDetails={setTodosDetails} id={newId} />:""
    
      }
      
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;