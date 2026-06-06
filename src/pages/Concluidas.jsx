import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

import { useTasks } from "../context/TaskContext";

export default function Concluidas() {
  const { tasks } = useTasks();

  const tarefasConcluidas = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Concluídas" />

        {tarefasConcluidas.length === 0 ? (
          <p>Nenhuma tarefa concluída.</p>
        ) : (
          tarefasConcluidas.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              titulo={task.titulo}
              materia={task.materia}
              tempo={task.tempo}
              prioridade={task.prioridade}
              completed={task.completed}
            />
          ))
        )}
      </main>
    </div>
  );
}