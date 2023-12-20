import React, { useState, useEffect } from "react";

const TaskReport = ({ fetchReportData, onFetchComplete }) => {
  const [taskReports, setTaskReports] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchTaskReport = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(
        "http://localhost:8000/core/api/v1/task_report/"
      );
      if (response.ok) {
        const data = await response.json();
        setTaskReports(data);
      }
    } catch (error) {
      console.error("Error fetching task report:", error);
    } finally {
      setIsFetching(false);
      onFetchComplete && onFetchComplete(); // Notify parent component that fetching is complete
    }
  };

  useEffect(() => {
    if (fetchReportData) {
      fetchTaskReport();
    }
  }, [fetchReportData]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Task Report</h2>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        taskReports.map((report) => (
          <div key={report.id} style={{ marginBottom: "20px" }}>
            <h3>Report ID: {report.id}</h3>
            <ul>
              {report.tasks.map((task, index) => (
                <li key={index}>
                  <strong>Task Name:</strong> {task["task name:"]},{" "}
                  <strong>Time Spent:</strong> {task["time spent"]}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskReport;
