import React, { useState } from "react";

const UpdateTaskStatus = ({ updateTaskList }) => {
  const [taskId, setTaskId] = useState("");
  const [userId, setUserId] = useState("");
  const [active, setActive] = useState("false"); // Default value as string

  const handleUpdateTaskStatus = async () => {
    // Perform PUT request to update task status
    const response = await fetch("http://localhost:8000/core/api/v1/task/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task_id: taskId,
        user_id: userId,
        active,
      }),
    });

    if (response.ok) {
      // If the task status is updated successfully, update the task list
      updateTaskList();
      setTaskId("");
      setUserId("");
      setActive("false");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Update Task Status</h2>
      <input
        type="number"
        placeholder="Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <label style={{ marginRight: "10px" }}>
        Active:
        <select value={active} onChange={(e) => setActive(e.target.value)}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label>
      <button onClick={handleUpdateTaskStatus}>Update Status</button>
    </div>
  );
};

export default UpdateTaskStatus;
