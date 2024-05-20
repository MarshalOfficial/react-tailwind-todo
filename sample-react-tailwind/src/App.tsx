import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TodoSummary from "./components/TodoSummary"
import useTodos from "./hooks/useTodos"

function App() {

  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos()

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
