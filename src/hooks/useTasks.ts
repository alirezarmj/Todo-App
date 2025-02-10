import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { Task } from "../types/task";

const useTasks = () => {
  // Initialize tasks from local storage if available
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState<string>("all");

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (title: string, description: string): void => {
    if (!title.trim()) return; // require at least a title
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
      isEditing: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]); // Add task to the beginning
    toast.success("Task added successfully!"); // Show success toast
  };

  // Delete a task
  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!"); // Show success toast
  };

  // Toggle task completion
  const toggleCompleted = (id: number): void => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    toast.info("Task completion toggled!"); // Show info toast
  };

  // Start editing a task
  const startEditing = (id: number): void => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isEditing: true } : task)));
  };

  // Save task changes
  const saveTask = (id: number, updatedTitle: string, updatedDesc: string): void => {
    if (!updatedTitle.trim()) return;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: updatedTitle,
              description: updatedDesc,
              isEditing: false,
            }
          : task
      )
    );
    toast.success("Task updated successfully!"); // Show success toast
  };

  // Cancel editing
  const cancelEditing = (id: number): void => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isEditing: false } : task)));
    toast.info("Editing cancelled!"); // Show info toast
  };

  // Filter tasks based on current filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleCompleted,
    startEditing,
    saveTask,
    cancelEditing,
  };
};

export default useTasks;
