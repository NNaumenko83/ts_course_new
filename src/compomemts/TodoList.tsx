import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  items,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};
