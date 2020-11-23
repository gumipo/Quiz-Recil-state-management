import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms/Tasks/index";

const TaskInput = () => {
  const inputEl = useRef(null);
  const [task, setTask] = useRecoilState(tasksState);

  const addTask = () => {
    const newTask = {
      title: inputEl.current.value,
      isCompleted: false,
    };
    setTask([...task, newTask]);
    inputEl.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={addTask}>add todo</button>
    </div>
  );
};

export default TaskInput;
