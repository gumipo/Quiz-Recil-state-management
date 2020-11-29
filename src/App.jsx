import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  unfinishedTaskState,
  finishedTaskState,
} from "./atoms/Tasks/selectors/selectors";
import TaskInput from "./componets/TaskInput";
import TaskItem from "./componets/TaskItem";

const App = () => {
  const unfinishedTasks = useRecoilValue(unfinishedTaskState);
  const finishedTasks = useRecoilValue(finishedTaskState);
  const [unfinishedTasksIndex, setUnfinishedTasksIndex] = useState(0);
  const [finishedTasksIndex, setfinishedTasksIndex] = useState(0);

  useEffect(() => {
    setUnfinishedTasksIndex(unfinishedTasks.length);
  }, [unfinishedTasks.length]);

  useEffect(() => {
    setfinishedTasksIndex(finishedTasks.length);
  }, [finishedTasks.length]);

  return (
    <div>
      <h1>TodoApp-Recoil-State-Management</h1>
      <TaskInput />
      <h2>未完了</h2>
      {unfinishedTasks.length > 0 &&
        unfinishedTasks.map((task) => (
          <TaskItem
            key={task.title}
            unfinishedTasks={unfinishedTasks}
            task={task}
            title={task.title}
            index={unfinishedTasksIndex}
            isCompleted={task.isCompleted}
          />
        ))}
      <h2>完了</h2>
      {finishedTasks.length > 0 &&
        finishedTasks.map((task) => (
          <TaskItem
            key={task.title}
            finishedTasks={finishedTasks}
            task={task}
            title={task.title}
            index={finishedTasksIndex}
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
};

export default App;
