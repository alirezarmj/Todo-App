import React from "react";
import EditableTaskForm from "./EditableTaskForm";
import { TaskItemProps } from "../types/task";

// TaskItem component accepts task data and several actions (delete, toggle, edit) as props
const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleCompleted, startEditing, saveTask, cancelEditing }) => {
  return (
    <li
      className={`bg-white p-5 rounded-lg shadow-md border border-gray-200 flex flex-col transition-colors hover:shadow-xl 
      ${task.completed ? "opacity-70 line-through" : ""}`} // Conditional styling for completed tasks (opacity and line-through)
    >
      {/* Action Buttons (shown when not editing) */}
      {!task.isEditing && (
        <div className="flex flex-col  sm:flex-row justify-center gap-y-1 sm:justify-end mb-2 sm:gap-x-2">
          {/* Complete/Undo button */}
          <button
            className="px-3  py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
            onClick={() => toggleCompleted(task.id)} // Toggles the completed state of the task
          >
            {task.completed ? "Undo" : "Complete"} {/* Displays 'Undo' if task is completed, else 'Complete' */}
          </button>

          {/* Edit button */}
          <button
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors font-medium"
            onClick={() => startEditing(task.id)} // Triggers task editing
          >
            Edit
          </button>

          {/* Delete button */}
          <button
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium"
            onClick={() => deleteTask(task.id)} // Deletes the task
          >
            Delete
          </button>
        </div>
      )}

      {/* Task Content (displayed when not editing or inside the EditableTaskForm when editing) */}
      {task.isEditing ? (
        // If the task is being edited, render the EditableTaskForm component
        <EditableTaskForm task={task} onSave={saveTask} onCancel={cancelEditing} />
      ) : (
        // Display task details when not editing
        <div>
          <h3 className="text-xl font-semibold text-gray-800 break-words">{task.title}</h3> {/* Task title */}
          {task.description && (
            <>
              <hr className="my-2 border-gray-300" /> {/* Separator line */}
              <p className="mt-1 text-gray-600 break-words">{task.description}</p> {/* Task description, shown if available */}
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default TaskItem;
