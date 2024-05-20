import React, { useState } from 'react'

interface AddTodoFormProp {
    onSubmit: (title: string) => void;
}

function AddTodoForm({ onSubmit }: AddTodoFormProp) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return (
        <form className='flex' onSubmit={handleSubmit}>
            <input
                placeholder='What needs to be done?'
                className='p-2 border border-gray-400 rounded-s-md grow'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className='w-16 text-white rounded-e-md bg-slate-900 hover:bg-slate-800'
                type='submit' >
                Add
            </button>
        </form>
    )
}

export default AddTodoForm