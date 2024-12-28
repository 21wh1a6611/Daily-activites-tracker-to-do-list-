import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(1);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id, text: newTodo, completed: false }]);
      setNewTodo('');
      setId(id + 1);
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-md">
      <h1 className="text-5xl font-bold text-white text-center mb-4">To Do List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full p-2 pl-10 text-lg text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Add new todo"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 py-2 px-4 text-lg text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b border-gray-200 bg-yellow-100 rounded-lg mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
                className="mr-2"
              />
              <span className={`text-lg ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{todo.text}</span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="py-1 px-2 text-lg text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
