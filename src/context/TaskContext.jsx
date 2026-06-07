import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        completed: false,
        ...task,
      },
    ]);
  }

  function toggleTask(id) {

  const mensagens = [
    "🎉 Excelente! Mais uma tarefa concluída.",
    "🚀 Você está avançando muito bem.",
    "📚 Continue assim, seu progresso está ótimo.",
    "💪 Mais uma etapa vencida.",
    "⭐ Parabéns pela dedicação." 
  ];

  setTasks((prev) =>
    prev.map((task) => {

      if (task.id === id) {

        const novoStatus = !task.completed;

        if (novoStatus) {

          const mensagem =
            mensagens[
              Math.floor(
                Math.random() * mensagens.length
              )
            ];

          setTimeout(() => {
            alert(mensagem);
          }, 100);

        }

        return {
          ...task,
          completed: novoStatus,
        };
      }

      return task;
    })
  );
}

  function deleteTask(id) {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}