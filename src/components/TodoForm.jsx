import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { PlusIcon } from "./Icons";

export function TodoForm() {
  const [taskInput, setTaskInput] = useState("");
  const { createTodo } = useTodoContext()

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setTaskInput(inputValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: taskInput,
      completed: false,
    };
    createTodo(newTodo)
    setTaskInput('')      
  };

  return (
    <form className="flex-container" onSubmit={handleFormSubmit}>
      <input
        autoFocus
        onFocus={e => e.currentTarget.select()} 
        className="form-control"
        onChange={handleInputChange}
        type="text"
        placeholder="Ingresa una Tarea Nueva..."
        value={taskInput}
      />
      <button className="btn btn-primary">
        <PlusIcon />
      </button>
    </form>
  );
}
