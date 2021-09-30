import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { RiCloseCircleLine, RiTodoFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo, filter, handleOnDragEnd}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };




  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.filter((todo) => {
                    if (filter == 'Completed') {
                      return todo.isComplete;
                    }

                    if (filter == 'In Progress') {
                      return !todo.isComplete;
                    }

                      return true;
                    
                  })
                  .map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <li
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          key={todo.id}
                          className={
                            snapshot.isDragging ? "selected" : "not-selected"
                          }
                        >
                        
                        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                              {todo.text}
                            </div>
                            <div className='icons'>
                              <RiCloseCircleLine
                                onClick={() => removeTodo(todo.id)}
                                className='delete-icon'
                              />
                              <TiEdit
                                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                                className='edit-icon'
                              />

                            </div>
                        </div>
                        </li>
                     )}
                    </Draggable>
                ))}
              
                
              </ul>
            )}
          </Droppable>
        </DragDropContext>
    
  );
};

export default ToDo;