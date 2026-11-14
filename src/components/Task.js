
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTask,
  editTask,
} from "../features/tasks/taskSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(
    task.description
  );

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(
        editTask({
          id: task.id,
          description: newDescription.trim(),
        })
      );

      setIsEditing(false);
    }
  };

  return (
    <div className={`task ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}

      <div className="task-buttons">
        <button
          className="done-btn"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.isDone ? "Undo" : "Done"}
        </button>

        {isEditing ? (
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Task;
