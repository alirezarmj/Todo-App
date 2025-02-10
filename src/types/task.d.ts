export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  isEditing: boolean;
}

export interface AddTaskFormProps {
  addTask: (title: string, description: string) => void;
}

export interface EditableTaskFormProps {
  task: Task;
  onSave: (id: number, updatedTitle: string, updatedDesc: string) => void;
  onCancel: (id: number) => void;
}

export interface FiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
  startEditing: (id: number) => void;
  saveTask: (id: number, updatedTitle: string, updatedDesc: string) => void;
  cancelEditing: (id: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
  startEditing: (id: number) => void;
  saveTask: (id: number, updatedTitle: string, updatedDesc: string) => void;
  cancelEditing: (id: number) => void;
}
