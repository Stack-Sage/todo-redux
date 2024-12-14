import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-tr from-black via-slate-800 to-slate-950  p-10">
    
      <form
        onSubmit={addTodoHandler}
        className="bg-gray-900 shadow-xl p-6 rounded-lg w-11/12 max-w-md text-center transform hover:scale-105 transition duration-200 ease-in-out"
      >
        <input
          type="text"
          className="w-full bg-gray-800 text-gray-200 text-lg rounded-md py-3 px-4 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none mb-4 shadow-inner"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-tr from-indigo-500 via-indigo-900 to-indigo-700 text-white font-semibold py-3 rounded-md shadow-lg hover:shadow-indigo-600/50 hover:scale-105 transition duration-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
