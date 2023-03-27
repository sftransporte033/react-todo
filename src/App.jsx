import ReactIcon from "./assets/react.svg";

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="main-content">
      <header>
        <h1>
          TODO <span style={{ color: "rgb(14,211,207)" }}>APP</span>{" "}
          <img src={ReactIcon} alt="React Icon" />
        </h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
