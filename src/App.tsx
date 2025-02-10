
import React from "react";
import { AddTaskForm, Filters, TaskList } from "./components";
import { ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import useTasks from "./hooks/useTasks";

const App: React.FC = () => {
  const { tasks, filter, setFilter, addTask, deleteTask, toggleCompleted, startEditing, saveTask, cancelEditing } = useTasks(); // Use custom hook

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Todo App</h1>

      {/* Add Task Form */}
      <AddTaskForm addTask={addTask} />

      {/* Filters */}
      <Filters filter={filter} setFilter={setFilter} />

      {/* Tasks List */}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} startEditing={startEditing} saveTask={saveTask} cancelEditing={cancelEditing} />

      {/* Toast Container to display toasts */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop />
    </div>
  );
};

export default App;
