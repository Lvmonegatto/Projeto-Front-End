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
  FiClock,
} from "react-icons/fi";

import "../styles/dashboard.css";

export default function Dashboard() {
  const { tasks } = useTasks();

  /**
   * Define a ordem de prioridade das tarefas.
   * Utilizado para exibir primeiro as tarefas mais importantes.
   */
  const prioridadeValor = {
    Alta: 1,
    Média: 2,
    Baixa: 3,
  };

  /**
   * Ordena as tarefas pela prioridade.
   */
  const tarefasOrdenadas = [...tasks].sort(
    (a, b) =>
      prioridadeValor[a.prioridade] -
      prioridadeValor[b.prioridade]
  );

  /**
   * Quantidade total de tarefas.
   */
  const total = tasks.length;

  /**
   * Quantidade de tarefas concluídas.
   */
  const concluidas = tasks.filter(
    (task) => task.completed
  ).length;

  /**
   * Quantidade de tarefas com prioridade alta.
   */
  const altaPrioridade = tasks.filter(
    (task) => task.prioridade === "Alta"
  ).length;

  /**
   * Quantidade de tarefas pendentes.
   */
  const tarefasRestantes = total - concluidas;

  /**
   * Percentual de progresso geral.
   */
  const progresso =
    total > 0
      ? Math.round((concluidas / total) * 100)
      : 0;

  /**
   * Soma todos os minutos planejados.
   * Utiliza o campo tempoTotal criado no modal.
   */
  const minutosTotais = tasks.reduce(
    (acc, task) => acc + (task.tempoTotal || 0),
    0
  );

  /**
   * Converte os minutos totais para horas.
   * Será utilizado pelo indicador de sobrecarga.
   */
  const horasTotais = Math.round(minutosTotais / 60);

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

          <h2>Tarefas Prioritárias</h2>

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