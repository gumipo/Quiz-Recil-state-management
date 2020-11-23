import React from "react";
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

  return (
    <div>
      <h1>TodoApp-Recoil-state-Management</h1>
      <TaskInput />
      <h2>未完了</h2>
      {unfinishedTasks.length > 0 &&
        unfinishedTasks.map((task, index) => (
          <TaskItem
            key={task.title}
            unfinishedTasks={unfinishedTasks}
            task={task}
            title={task.title}
            index={index}
            isCompleted={task.isCompleted}
          />
        ))}
      <h2>完了</h2>
      {finishedTasks.length > 0 &&
        finishedTasks.map((task, index) => (
          <TaskItem
            key={task.title}
            finishedTasks={finishedTasks}
            task={task}
            title={task.title}
            index={index}
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
};

export default App;
