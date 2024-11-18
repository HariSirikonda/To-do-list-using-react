import React, { useState } from 'react';
import './App.css';
import Task from './Components/Task';

function App() {
  const [tasks, setTasks] = useState([]); // Array to hold each task instance
  const [title, setTitle] = useState(''); // Input field for task title
  const [description, setDescription] = useState(''); // Input field for task description
  const [filter, setFilter] = useState("Todo"); // Track which filter is selected

  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = () => {
    // Add a new task object to the array with the current title and description
    if (title && description) {
      setTasks([...tasks, { title, description, isCompleted: false }]);
      setTitle(''); // Clear title input field
      setDescription(''); // Clear description input field
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filter out the task at the given index
    setTasks(updatedTasks);
  };

  // Function to change the filter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Todo") return !task.isCompleted;
    if (filter === "Completed") return task.isCompleted;
    return true;
  });

  return (
    <div className='App'>
      {/* Heading */}
      <div className="main-heading justify-content-center text-center my-5">
        <h1><b>Welcome to To-Do List Application</b></h1>
      </div>
      {/* Wrapper */}
      <div className="todo-wrapper bg-white text-black p-2 mx-auto mt-5 shadow w-50 mb-5">
        {/* Input Field */}
        <div className="todo-input d-flex border-bottom justify-content-center align-items-center">
          <div className="mb-3 mx-4 w-50">
            <label className="form-label"><b>Title</b></label>
            <input
              type="text"
              className="form-control w-100"
              id="task-name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's Your Title?"
            />
          </div>
          <div className="mb-3 mx-4 w-50">
            <label className="form-label"><b>Description</b></label>
            <input
              type="text"
              className="form-control w-100"
              id="task-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's Your Description?"
            />
          </div>
          <div className="add-btn mb-2 mx-3">
            <button type="button" className="btn btn-success mt-4 mb-1" onClick={addTask}><b>Add Task</b></button>
          </div>
        </div>
        {/* Filter Button */}
        <div className="btn-group m-3" role="group" aria-label="Filter tasks">
          <button type="button" className={`btn ${filter === 'Todo' ? 'btn-light' : 'btn-light'}`} onClick={() => handleFilterChange("Todo")}>Todo</button>
          <button type="button" className={`btn ${filter === 'Completed' ? 'btn-success' : 'btn-light'}`} onClick={() => handleFilterChange("Completed")}>Completed</button>
        </div>
        {/* Task List */}
        <div className="task-area text-start border border-light">
          {filteredTasks.map((task, index) => (
            <Task 
              key={index}
              title={task.title}
              description={task.description} 
              isCompleted={task.isCompleted}
              onComplete={() => handleComplete(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
