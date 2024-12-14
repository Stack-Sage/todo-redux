import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-[420px] max-h-[560px] 
   overflow-y-scroll bg-gradient-to-b  from-black via-gray-900 to-slate-950 py-8 m-2"
    style={{
      scrollbarWidth: "thin",
      scrollbarColor: "#36454F black",
      scrollBehavior: "smooth",
      
    }}
  >

     
      <div className="w-11/12 max-w-2xl mx-auto  bg-gradient-to-tr from-black via-slate-800 to-slate-950  p-6 rounded-lg shadow-xl">
        <ul className="divide-y divide-gray-600">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400">No todos added yet!</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="py-4 flex justify-between items-center group transition hover:bg-slate-950 rounded-lg px-4"
              >
                <span className="text-lg text-gray-200 group-hover:text-white transition">
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-indigo-900 hover:text-yellow-600 hover:bg-indigo-800 text-white py-2 px-3 rounded-md shadow-md hover:shadow-lg transition transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
