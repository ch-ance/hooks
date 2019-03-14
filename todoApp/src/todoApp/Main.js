import React, { useState } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, handleInput] = useState("");
  return (
    <>
      <ul>
        {todos.map(todo => (
          <>
            <li
              onClick={() =>
                setTodos(
                  todos.map(mapTodo =>
                    mapTodo.id === todo.id
                      ? { ...mapTodo, completed: !mapTodo.completed }
                      : mapTodo
                  )
                )
              }
            >
              {todo.text} {todo.completed ? "COMPLETE" : ""}
            </li>
            <button
              onClick={() =>
                setTodos(
                  todos.map(TODO => {
                    return TODO.id === todo.id
                      ? { ...TODO, text: todoText }
                      : TODO;
                  })
                )
              }
            >
              Edit
            </button>
          </>
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
      <button onClick={() => setTodos(todos.filter(todo => !todo.completed))}>
        Clear Completed
      </button>
    </>
  );
};

export default Main;
