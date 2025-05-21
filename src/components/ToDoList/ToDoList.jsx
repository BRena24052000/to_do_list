import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import style from "./ToDoList.module.css";


function ToDoList({ arrayOfTodos = [], removeToDo = Function.prototype, Complited = Function.prototype, removeChecked = Function.prototype, saveEditedText = Function.prototype, }) {
  return (
    <>
      <ul className={style.list}>
        {arrayOfTodos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todo={todo}
              removeToDo={removeToDo}
              Complited={Complited}
              saveEditedText={saveEditedText} 
            />
          );
        })}
      </ul>

      <button className={style.removeBtn} onClick={removeChecked}>
        Удалить выбранные
      </button>
    </>
  );
}

export default ToDoList;
