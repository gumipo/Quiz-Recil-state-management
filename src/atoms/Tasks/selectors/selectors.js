import { selector } from "recoil";

import { tasksState } from "../index";

export const unfinishedTaskState = selector({
  key: "unfinishedTaskState",
  get: ({ get }) => {
    const tasks = get(tasksState);
    const unfinishedTasks = tasks.filter((item) => item.isCompleted === false);
    return unfinishedTasks;
  },
});

export const finishedTaskState = selector({
  key: "finishedTaskState",
  get: ({ get }) => {
    const tasks = get(tasksState);
    const finishedTasks = tasks.filter((item) => item.isCompleted === true);
    return finishedTasks;
  },
});
