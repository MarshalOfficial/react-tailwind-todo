import { useState } from "react"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TodoSummary from "./components/TodoSummary"

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => (
        todo.id === id ? { ...todo, completed } : todo)))
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title: title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <main className="h-screen py-10 space-y-5 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center">
        Your Todos
      </h1>
      <div className="max-w-lg p-5 mx-auto space-y-6 rounded-md bg-slate-100">
        <AddTodoForm
          onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  )
}

export default App
