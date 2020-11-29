import React from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms/Tasks";

const TaskItem = ({ title, index, isCompleted }) => {
  const [task, setTask] = useRecoilState(tasksState);

  const isCompleteChange = (index) => {
    let newTask = task.filter((item, i) => i === index);
    const newTasks = task.filter((item, i) => i !== index);
    newTask = {
      title: title,
      isCompleted: true,
    };
    const newTaskList = [newTask, ...newTasks];

    setTask(newTaskList);
  };

  return (
    <div style={{ display: "flex" }}>
      <p>{title}</p>
      <button onClick={() => isCompleteChange(index)}>
        {!isCompleted ? "完了" : "戻す"}
      </button>
    </div>
  );
};

export default TaskItem;
