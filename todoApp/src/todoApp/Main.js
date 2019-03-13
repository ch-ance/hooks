import React, { useState } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, handleInput] = useState("");
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li
            onClick={() =>
              setTodos([...todos, { ...todo, completed: !todo.completed }])
            }
          >
            {todo.text} {todo.completed ? "X" : "O"}
          </li> 
        ))} 
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([
            ...todos,
            { text: todoText, completed: false, id: Date.now() }
          ]);
          handleInput("");
        }}
      >
        <input
          type="text"
          value={todoText}
          onChange={e => handleInput(e.target.value)}
        />
      </form>
    </>
  );
};

export default Main;
