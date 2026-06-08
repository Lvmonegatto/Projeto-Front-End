import {
  useEffect,
  useState,
} from "react";

import TaskContext from "./TaskContext";

import { useNotification }
  from "../hooks/useNotification";

export default function TaskProvider({
  children,
}) {

  const { showNotification } =
    useNotification();

  const [tasks, setTasks] = useState(() => {

    const saved =
      localStorage.getItem(
        "speedflow_tasks"
      );

    return saved
      ? JSON.parse(saved)
      : [];

  });

  /**
   * Salva as tarefas no LocalStorage.
   */
  useEffect(() => {

    localStorage.setItem(
      "speedflow_tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  /**
   * Adiciona uma nova tarefa.
   */
  function addTask(task) {

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        completed: false,
        ...task,
      },
    ]);

    showNotification(
      "✅ Tarefa criada com sucesso.",
      "success"
    );
  }

  /**
   * Marca ou desmarca uma tarefa como concluída.
   */
  function toggleTask(id) {

    const mensagens = [
      "🎉 Excelente! Mais uma tarefa concluída.",
      "🚀 Você está avançando muito bem.",
      "📚 Continue assim, seu progresso está ótimo.",
      "💪 Mais uma etapa vencida.",
      "⭐ Parabéns pela dedicação.",
    ];

    setTasks((prev) =>
      prev.map((task) => {

        if (task.id === id) {

          const novoStatus =
            !task.completed;

          if (novoStatus) {

            const mensagem =
              mensagens[
                Math.floor(
                  Math.random() *
                    mensagens.length
                )
              ];

            showNotification(
              mensagem,
              "success"
            );

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

  /**
   * Remove uma tarefa.
   */
  function deleteTask(id) {

    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );

    showNotification(
      "🗑️ Tarefa removida.",
      "error"
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