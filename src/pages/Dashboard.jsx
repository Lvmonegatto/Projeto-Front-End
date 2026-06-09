import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import TaskCard from "../components/TaskCard";
import WorkloadCard from "../components/WorkloadCard";
import WeeklySummary from "../components/WeeklySummary";
import { useTasks }from "../hooks/useTasks";
import MotivationCard from "../components/MotivationCard";
import PlanningSuggestion from "../components/PlanningSuggestion";

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
   * Considera apenas tarefas pendentes.
   */
  const tarefasAtivas = tasks.filter(
    (task) => !task.completed
  );
  
  const minutosTotais = tarefasAtivas.reduce(
    (acc, task) =>
      acc + (task.tempoTotal || 0),
    0
  );

  /**
   * Converte os minutos totais para horas.
   * Será utilizado pelo indicador de sobrecarga.
   */
  const horasTotais = Math.round(minutosTotais / 60);

  /**
 * Primeira tarefa de maior prioridade.
 */
const proximaTarefa =
  tarefasOrdenadas.length > 0
    ? tarefasOrdenadas[0].titulo
    : null;

/**
 * Mensagem motivacional baseada no progresso.
 */
function gerarMensagem() {

  if (progresso === 100) {
    return "Parabéns! Todas as tarefas foram concluídas.";
  }

  if (progresso >= 70) {
    return "Você está muito perto de concluir sua semana.";
  }

  if (progresso >= 40) {
    return "Bom progresso! Continue avançando.";
  }

  return "Comece pelas tarefas de maior prioridade.";
}

const mensagemMotivacional =
  gerarMensagem();

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

        <WeeklySummary
        proximaTarefa={proximaTarefa}
        pendentes={tarefasRestantes}
        horasTotais={horasTotais}
        mensagem={mensagemMotivacional}
      />

      <MotivationCard
        progresso={progresso}
      />
        <PlanningSuggestion
          tasks={tasks}
        />
        
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