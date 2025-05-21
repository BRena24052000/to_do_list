import { v4 as uuidv4 } from 'uuid';
import './App.css'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([]);

  const removeChecked = () => {
    const newToDos = toDos.filter(todo => !todo.isCompleted);
    setToDos(newToDos);
  }
  
  const saveEditedText = (id, textEdit) => {
    const newToDos = toDos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: textEdit };
      } else {
        return todo;
      }
    });
    setToDos(newToDos); 
  }

  const addToDo = (textTodo) => {
    const newTodo = {
      text: textTodo,
      isCompleted: false,
      isEditable: false,
      id: uuidv4(),
    }
    setToDos([...toDos, newTodo]);
  }
  
  function removeToDo(id) {
    const newToDos = toDos.filter(todo => todo.id !== id);
    setToDos(newToDos);
  }

  function Complited(id) {
    const newToDos = toDos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setToDos(newToDos);
  }

  return (
    <>
      <ToDoForm addTodo={addToDo}/>
      <ToDoList
        removeToDo={removeToDo}
        arrayOfTodos={toDos}
        Complited={Complited}
        removeChecked={removeChecked}
        saveEditedText={saveEditedText} 
      />
    </>
  );
}

export default App;