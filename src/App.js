import React, { useEffect } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AuthenticationButton from './authentication-button';

function App() {
  return (
    <div className='todo-app'>
      <AuthenticationButton/>
      <ToDoList />
    </div>
  );
}

export default App;