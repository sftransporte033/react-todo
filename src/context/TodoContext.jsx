import { useContext, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

const initialState = getLocalStorage()
const TodoContext = createContext()

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(initialState);

  const createTodo = todo => {
    const temp = [...todos]
    const findTodo = temp.find(temp => temp.title === todo.title)
    if(!findTodo) {
      temp.push(todo)
      setLocalStorage(temp)
      setTodos(temp)
    }
  }

  const deleteTodo = id => {
    const temp = todos.filter(item => item.id !== id)
    setLocalStorage(temp)
    setTodos(temp)
  }

  const clearCompletedTodos = () => {
    const temp = todos.filter(item => !item.completed)
    setTodos(temp)
    setLocalStorage(temp)
  }

  const toggleCompleted = (id) => {
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.completed = !item.completed 
    
    setLocalStorage(temp)
    setTodos(temp)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <TodoContext.Provider value={{
      todos,
      activeCount, 
      completedCount,
      createTodo,
      deleteTodo,
      toggleCompleted,
      clearCompletedTodos
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodoContext() {
  const context = useContext(TodoContext)
  if(!context) {
    throw new Error('TodoContext must be within a TodoProvider')
  }
  return context
}