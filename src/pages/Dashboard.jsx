import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import TaskCard from "../components/TaskCard";
import WorkloadCard from "../components/WorkloadCard";

import { useTasks } from "../context/TaskContext";

import {
  FiClipboard,
  FiCheckCircle,
  FiAlertCircle,
  FiClock
} from "react-icons/fi";

import "../styles/dashboard.css";

export default function Dashboard() {
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
  const total = tasks.length;

  const concluidas = tasks.filter(
    (task) => task.completed
  ).length;

  const altaPrioridade = tasks.filter(
    (task) => task.prioridade === "Alta"
  ).length;

  const tarefasRestantes = total - concluidas;

  const progresso =
    total > 0
      ? Math.round((concluidas / total) * 100)
      : 0;
    /**
 * Soma todas as horas cadastradas.
 * Exemplo:
 * "2" -> 2
 * "4" -> 4
 */
const horasTotais = tasks.reduce((acc, task) => {

  const horas = parseInt(task.tempo) || 0;

  return acc + horas;

}, 0);
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Dashboard" />

        <div className="stats-grid">
          <StatsCard
            titulo="Todas as tarefas"
            valor={total}
            icone={<FiClipboard />}
          />

          <StatsCard
            titulo="Completadas"
            valor={concluidas}
            icone={<FiCheckCircle />}
          />

          <StatsCard
            titulo="Alta prioridade"
            valor={altaPrioridade}
            icone={<FiAlertCircle />}
          />

          <StatsCard
            titulo="Pendentes"
            valor={tarefasRestantes}
            icone={<FiClock />}
          />
        </div>

        <ProgressBar porcentagem={progresso} />
        <WorkloadCard horas={horasTotais} />

        <section className="dashboard-tasks">
          <h2>Tarefas Diárias</h2>

          {tasks.length === 0 ? (
            <p className="empty-message">
              Nenhuma tarefa cadastrada.
            </p>
          ) : (
            tarefasOrdenadas.slice(0, 5).map((task) => (
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
        </section>
      </main>
    </div>
  );
}