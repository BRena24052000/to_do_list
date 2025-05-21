import React, { useState } from "react";
import styles from "./ToDoForm.module.css";

function ToDoForm({addTodo}) {
  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    if(text) {
    e.preventDefault();
    addTodo(text);
    setText('')
  }}


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button className={text ? styles.buttonComplited : ''}>Отправить</button>
    </form>
  );
}

export default ToDoForm;
