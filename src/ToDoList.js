import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import ToDoFilter from './ToDoFilter';
import { useAuth0 } from "@auth0/auth0-react";


function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  
  useEffect(()=>{
    getLocalTodo();
  },[]);
  useEffect(()=>{
    saveLocalTodos();
  },[todos]);

  const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  
  const getLocalTodo = ()=> {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  
  const updateFilter = input => {
    setFilter(input);
    console.log(filter);
  }

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
      
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  function handleOnDragEnd(result) {
    if (!result.destination) return;
  
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    setTodos(items);
  }

   
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ?  (
    <>
      <h1>My To-Do-List</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDoFilter updateFilter={updateFilter}/>

      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        filter={filter}
        handleOnDragEnd ={handleOnDragEnd}
      />
     
      
    </>
  ):<div/>;
}

export default ToDoList;