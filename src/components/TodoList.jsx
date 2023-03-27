import { useState } from "react";
import { todoFilters } from "../constants";
import { useTodoContext } from "../context/TodoContext";
import {TodoFooter} from "./TodoFooter";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos } = useTodoContext();
  const [filterSelected, setFilterSelected] = useState(todoFilters.ALL);

  const handleFilterSelected = (filter) => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === todoFilters.ACTIVE) return !todo.completed;
    if (filterSelected === todoFilters.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <TodoFooter
        filterSelected={filterSelected}
        onFilterChange={handleFilterSelected}
      />
    </ul>
  );
}
