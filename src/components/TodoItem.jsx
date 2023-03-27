import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { TrashIcon } from "./Icons";

export function TodoItem({ todo }) {
  const { deleteTodo, toggleCompleted } = useTodoContext();
  const isCompleted = todo.completed ? "completed" : "";
  return (
    <li key={todo.id}>
      <span className={isCompleted}>
        <input
          type="checkbox"
          onClick={() => toggleCompleted(todo.id)}
          defaultChecked={todo.completed}
        />
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-secondary">
        <TrashIcon />
      </button>
    </li>
  );
}
