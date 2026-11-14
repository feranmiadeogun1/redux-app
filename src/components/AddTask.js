
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (description.trim()) {
      dispatch(addTask(description.trim()));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="add-task">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
