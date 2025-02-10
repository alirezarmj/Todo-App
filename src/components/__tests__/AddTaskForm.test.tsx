import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import AddTaskForm from "../AddTaskForm";

describe("AddTaskForm", () => {
  it("renders the form correctly", () => {
    render(<AddTaskForm addTask={vi.fn()} />);

    expect(screen.getByText("Add New Task")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("Task Title")).toHaveLength(1);
    expect(screen.getAllByPlaceholderText("Task Description (optional)")).toHaveLength(1);
    expect(screen.getAllByRole("button", { name: /add task/i })).toHaveLength(1);
  });

  it("does not call addTask if title is empty", () => {
    const addTaskMock = vi.fn();
    render(<AddTaskForm addTask={addTaskMock} />);

    const addButton = screen.getAllByRole("button", { name: /add task/i })[0];
    fireEvent.click(addButton);

    expect(addTaskMock).not.toHaveBeenCalled();
  });
});
