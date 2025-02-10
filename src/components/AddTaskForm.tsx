import React, { useState } from "react";
import { AddTaskFormProps } from "../types/task";

// AddTaskForm component accepts the addTask function as a prop
const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  // useState hooks to manage form input states for task title and description
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  // Function to handle the task addition, calls addTask with title and description, then clears the inputs
  const handleAddTask = (): void => {
    addTask(title, desc); // Add the task using the passed addTask function
    setTitle(""); // Clear title field after adding the task
    setDesc(""); // Clear description field after adding the task
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8 border border-gray-200">
      {/* Header section for the form */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Task</h2>

      {/* Input field for task title */}
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
        value={title} // Binding title state to the input value
        onChange={(e) => setTitle(e.target.value)} // Updating title state on input change
      />

      {/* Horizontal line separator */}
      <hr className="mb-4 border-gray-300" />

      {/* Textarea field for task description */}
      <textarea
        placeholder="Task Description (optional)"
        className="w-full resize-none p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
        value={desc} // Binding description state to the textarea value
        onChange={(e) => setDesc(e.target.value)} // Updating description state on textarea change
        wrap="soft" // Soft wrap for text inside the textarea
      />

      {/* Button to add the task */}
      <button
        className="w-full bg-indigo-500 text-white px-4 py-3 rounded-lg hover:bg-indigo-600 transition-colors font-semibold"
        onClick={handleAddTask} // Calling handleAddTask when the button is clicked
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
