
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";
import Task from "./Task";

function ListTask() {
  const dispatch = useDispatch();

  const { tasks, filter } = useSelector(
    (state) => state.tasks
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>

        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => dispatch(setFilter("done"))}
        >
          Done
        </button>

        <button
          className={filter === "notDone" ? "active" : ""}
          onClick={() => dispatch(setFilter("notDone"))}
        >
          Not Done
        </button>
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <p className="empty-message">
          No tasks found. Add a new task!
        </p>
      )}
    </div>
  );
}

export default ListTask;
