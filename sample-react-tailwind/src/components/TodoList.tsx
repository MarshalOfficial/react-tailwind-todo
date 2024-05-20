import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types/todo'

interface TodoListProps {
    todos: Todo[],
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

function TodoList({ todos, onCompletedChange, onDelete }: TodoListProps) {
    return (
        <>
            <div className="space-y-2">
                {
                    todos.map(
                        todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onCompletedChange={onCompletedChange}
                                onDelete={onDelete} />
                        ))
                }
            </div>
            {todos.length === 0 && <p className='text-sm text-center text-gray-500'>No todos yet. Add a new one above.</p>}
        </>
    )
}

export default TodoList