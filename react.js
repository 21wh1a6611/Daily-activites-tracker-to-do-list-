import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Wake up at 6:00 AM', completed: false },
    { id: 2, task: 'Morning exercise', completed: false },
    { id: 3, task: 'Breakfast', completed: false },
    { id: 4, task: 'Start work', completed: false },
    { id: 5, task: 'Lunch', completed: false },
    { id: 6, task: 'Dinner', completed: false },
    { id: 7, task: 'Sleep at 10:00 PM', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: tasks.length + 1, task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-orange-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-indigo-900 mb-4">Daily Activities Tracker</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between mb-2 bg-yellow-100 p-2 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
                className="mr-2"
              />
              <span className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-indigo-900'}`}>{task.task}</span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
