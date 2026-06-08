import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

import { useTasks }from "../hooks/useTasks";

export default function Tarefas() {
  const { tasks } = useTasks();

  const prioridadeValor = {
    Alta: 1,
    Média: 2,
    Baixa: 3,
  };

  const tarefasOrdenadas = [...tasks].sort(
    (a, b) =>
      prioridadeValor[a.prioridade] -
      prioridadeValor[b.prioridade]
  );

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Tarefas" />

        {tarefasOrdenadas.length === 0 ? (
          <p>Nenhuma tarefa cadastrada.</p>
        ) : (
          tarefasOrdenadas.map((task) => (
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