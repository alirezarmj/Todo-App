import React from "react";
import { FiltersProps } from "../types/task";

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row sm:justify-center sm:items-center  space-x-3 mb-6">
      {["all", "active", "completed"].map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded-full transition-colors font-medium ${filter === option ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          onClick={() => setFilter(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filters;
