import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState(() => {

    const saved = localStorage.getItem("speedflow_tasks");

    return saved ? JSON.parse(saved) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "speedflow_tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  function addTask(task) {

    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        completed: false,
        ...task
      }
    ]);

  }

  function toggleTask(id) {

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );

  }

  function deleteTask(id) {

    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );

  }

  return (

    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask
      }}
    >

      {children}

    </TaskContext.Provider>

  );
}

export function useTasks() {
  return useContext(TaskContext);
}