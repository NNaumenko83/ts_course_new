import React, { useEffect, useRef, useState } from "react";
import { ITodo } from "../types/data";

type Props = {};

export const App: React.FC = (props: Props) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
  };

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};
