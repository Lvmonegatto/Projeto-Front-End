import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import TaskCard from "../components/TaskCard";

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

        <section className="dashboard-tasks">
          <h2>Tarefas Diárias</h2>

          {tasks.length === 0 ? (
            <p className="empty-message">
              Nenhuma tarefa cadastrada.
            </p>
          ) : (
            tasks.slice(0, 5).map((task) => (
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