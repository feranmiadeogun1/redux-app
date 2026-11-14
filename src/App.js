
import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h1>My ToDo Application</h1>
        <p className="subtitle">
          Organize your day, one task at a time.
        </p>

        <AddTask />

        <ListTask />
      </div>
    </div>
  );
}

export default App;
