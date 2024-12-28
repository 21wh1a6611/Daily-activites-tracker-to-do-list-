import React, { useState } from 'react';

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
}

const DailyTaskTracker = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, taskName: 'Buy groceries', completed: false },
    { id: 2, taskName: 'Do laundry', completed: false },
    { id: 3, taskName: 'Clean the house', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, taskName: newTask, completed: false }]);
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
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Daily Task Tracker</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
                className="mr-2"
              />
              <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{task.taskName}</span>
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

export default DailyTaskTracker;
