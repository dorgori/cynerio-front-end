import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import UpdateTaskStatus from "./components/UpdateTaskStatus";
import TaskReport from "./components/TaskReport";
import TaskList from "./components/TaskList";

const App = () => {
  const [taskListKey, setTaskListKey] = useState(0);
  const [fetchReportData, setFetchReportData] = useState(false);

  const updateTaskList = () => {
    setTaskListKey((prevKey) => prevKey + 1);
  };

  const handleFetchReport = () => {
    setFetchReportData(true);
  };

  const handleFetchComplete = () => {
    setFetchReportData(false); // Reset fetchReportData after fetching is complete
  };

  return (
    <div>
      <CreateTask updateTaskList={updateTaskList} />
      <UpdateTaskStatus updateTaskList={updateTaskList} />
      <button onClick={handleFetchReport}>Fetch Task Report</button>
      <TaskReport
        fetchReportData={fetchReportData}
        onFetchComplete={handleFetchComplete}
      />
      <TaskList updateKey={taskListKey} />
    </div>
  );
};

export default App;
