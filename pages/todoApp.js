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
          <li
            onClick={() => {
              setTodos(
                todos.map(TODO => {
                  return TODO.id === todo.id
                    ? { ...TODO, completed: !TODO.completed }
                    : TODO;
                })
              );
            }}
          >
            {todo.text} {todo.completed ? "COMPLETED" : ""}
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([...todos, { text: todoText, id: Date.now() }]);
          handleInput("");
        }}
      >
        <input
          type="text"
          value={todoText}
          onChange={e => handleInput(e.target.value)}
        />
      </form>
      <button onClick={() => setTodos(todos.filter(TODO => !TODO.completed))}>Clear Completed</button>
    </>
  );
};

export default todoApp;
