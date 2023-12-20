import React, { useState, useEffect } from "react";

const TaskList = ({ updateKey }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const response = await fetch("http://localhost:8000/core/api/v1/task/");
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        }
      } catch (error) {
        console.error("Error fetching task list:", error);
      }
    };

    fetchTaskList();
  }, [updateKey]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Task List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#f8f8f8",
            }}
          >
            <strong>Task ID:</strong> {task.id}, <strong>Task Name:</strong>{" "}
            {task.name}, <strong>Task Status:</strong> {String(task.is_checkin)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
