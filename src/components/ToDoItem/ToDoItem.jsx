import React, { useState } from "react";
import styles from "./ToDoItem.module.css";

function ToDoItem({ todo, removeToDo, Complited, saveEditedText }) {
  const [isEditable, setIsEditable] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    setIsEditable(false);
    saveEditedText(todo.id, editedText); 
  };

  const handleEditClick = () => {
    if (isEditable) {
      handleSave();
    } else {
      setIsEditable(true);
    }
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleClick = () => {
    removeToDo(todo.id);
  };

  return (
    <li
      className={todo.isCompleted ? styles.contentComplited : styles.content}
    >
      {isEditable ? (
      <input
      type="text"
      value={editedText}
      onChange={handleInputChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSave();
        } else if (e.key === "Escape") {
          setEditedText(todo.text); 
          setIsEditable(false);     
        }
      }}
      className={styles.inputEditable}
    />
      ) : (
        <p>{todo.text}</p>
      )}

      <div className={styles.buttons}>
        <button onClick={() => Complited(todo.id)}>
          {todo.isCompleted ? "Отменить" : "Выполнить"}
        </button>
        <button onClick={handleClick}>Удалить</button>
        <button onClick={handleEditClick}>
          {isEditable ? "Сохранить" : "Изменить"}
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;