import React, { useState } from "react";

const CreateTask = ({ updateTaskList }) => {
  const [taskName, setTaskName] = useState("");

  const handleCreateTask = async () => {
    const response = await fetch("http://localhost:8000/core/api/v1/task/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
      }),
    });

    if (response.ok) {
      // update the task list
      updateTaskList();
      setTaskName(""); // Clear the input field
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default CreateTask;
