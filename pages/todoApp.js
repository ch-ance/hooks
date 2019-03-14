import { useState } from "react";
import NavBar from "./NavBar";
// import styled from 'styled-components';

// const StyledApp = styled.div`
//     width: 500px;
//     margin: 0 auto;
// `;

const todoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, handleInput] = useState("");
  return (
    <>
      <NavBar />
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([...todos, { text: todoText }]);
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

export default todoApp;
