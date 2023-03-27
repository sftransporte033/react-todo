import React from "react";
import { filtersButtons } from "../constants";
import { useTodoContext } from "../context/TodoContext";

export function TodoFooter({ filterSelected, onFilterChange }) {
  const { activeCount, completedCount, clearCompletedTodos } = useTodoContext();

  return (
    <li className="footer">
      <small>
        {activeCount + " "}
        todo pendiente
      </small>
      <div className="flex">
        {Object.entries(filtersButtons).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected;
          const className = isSelected ? "selected" : "";
          return (
            <a
              className={`actions ${className}`}
              href={href}
              key={key}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key);
              }}
            >
              {literal}
            </a>
          );
        })}
        { completedCount > 0 && (
          <button className="clear-completed" onClick={clearCompletedTodos}>Borrar Completadas</button>
        )}
      </div>
    </li>
  );
}
