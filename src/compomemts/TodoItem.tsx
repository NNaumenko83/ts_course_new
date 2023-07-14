import React from "react";

import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      <span style={{ display: "inline-block", margin: "0 10px" }}>{title}</span>
      <button
        type="button"
        onClick={() => {
          removeTodo(id);
        }}
        style={{
          background: "transparent",
          color: "red ",
          border: "none",
          outline: "null",
        }}
      >
        x
      </button>
    </div>
  );
};
