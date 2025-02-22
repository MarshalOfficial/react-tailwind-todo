import { Todo } from '../types/todo'

interface TodoSummaryProps {
    todos: Todo[],
    deleteAllCompleted: () => void
}

function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className='space-y-2 text-center'>
            <p className='text-sm font-medium'>
                {completedTodos.length}/{todos.length} todos completed.
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className='text-sm font-medium text-red-500 hover:underline'>
                    Delete All Completed
                </button>
            )}
        </div>
    )
}

export default TodoSummary