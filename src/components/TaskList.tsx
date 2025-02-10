import React from "react";
import TaskItem from "./TaskItem";
import { TaskListProps } from "../types/task";

// TaskList component accepts a list of tasks and several task-related actions as props
const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleCompleted, startEditing, saveTask, cancelEditing }) => {
  return (
    <ul className="space-y-4">
      {/* Conditional rendering when there are no tasks */}
      {tasks.length === 0 && <p className="text-center text-gray-500">No tasks to display.</p>} {/* Displays message if the task list is empty */}
      {/* Mapping through tasks and rendering TaskItem for each one */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Using task ID as a unique key for each task item
          task={task} // Passing task object as prop to TaskItem component
          deleteTask={deleteTask} // Passing deleteTask function to handle task deletion
          toggleCompleted={toggleCompleted} // Passing toggleCompleted function to handle task completion status
          startEditing={startEditing} // Passing startEditing function to trigger task editing mode
          saveTask={saveTask} // Passing saveTask function to handle saving the edited task
          cancelEditing={cancelEditing} // Passing cancelEditing function to handle canceling the editing process
        />
      ))}
    </ul>
  );
};

export default TaskList;
