import React, { useState } from "react";
import { EditableTaskFormProps } from "../types/task";

// EditableTaskForm component accepts task object and onSave, onCancel functions as props
const EditableTaskForm: React.FC<EditableTaskFormProps> = ({ task, onSave, onCancel }) => {
  // useState hooks to manage the form input states for the task title and description
  const [editTitle, setEditTitle] = useState<string>(task.title);
  const [editDesc, setEditDesc] = useState<string>(task.description);

  return (
    <div className="w-full">
      {/* Input field for editing the task title */}
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
        value={editTitle} // Binding editTitle state to the input value
        onChange={(e) => setEditTitle(e.target.value)} // Updating editTitle state on input change
      />

      {/* Horizontal line separator */}
      <hr className="mb-4 border-gray-300" />

      {/* Textarea field for editing the task description */}
      <textarea
        className="w-full resize-none p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
        value={editDesc} // Binding editDesc state to the textarea value
        onChange={(e) => setEditDesc(e.target.value)} // Updating editDesc state on textarea change
        wrap="soft" // Soft wrap for text inside the textarea
      />

      {/* Button container with flex layout for Save and Cancel buttons */}
      <div className="flex space-x-3">
        {/* Save button triggers the onSave function with the task ID, title, and description */}
        <button
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
          onClick={() => onSave(task.id, editTitle, editDesc)} // Calling onSave with updated data
        >
          Save
        </button>

        {/* Cancel button triggers the onCancel function with the task ID */}
        <button
          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium"
          onClick={() => onCancel(task.id)} // Calling onCancel to cancel the edit operation
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableTaskForm;
