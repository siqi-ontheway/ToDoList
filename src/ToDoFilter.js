import React, { useState } from 'react';

function ToDoFilter( {updateFilter}){

  return (
    <div>
      <button onClick={() => updateFilter('All')} className='filter-button'>
        All
      </button>
      <button onClick={() => updateFilter('In Progress')} className='filter-button'>
        In progress
      </button>
      <button onClick={() => updateFilter('Completed')} className='filter-button'>
        Completed
      </button>  
    </div>
 
  )
}
    

export default ToDoFilter;