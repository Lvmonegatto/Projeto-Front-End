import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import TaskCard from "../components/TaskCard";

import {
  FiClipboard,
  FiCheckCircle,
  FiAlertCircle,
  FiClock
} from "react-icons/fi";

import "../styles/dashboard.css";

export default function Dashboard() {

  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        <Header titulo="Dashboard" />

        <div className="stats-grid">

          <StatsCard
            titulo="Todas as tarefas"
            valor="10"
            icone={<FiClipboard />}
          />

          <StatsCard
            titulo="Completadas"
            valor="2"
            icone={<FiCheckCircle />}
          />

          <StatsCard
            titulo="Alta prioridade"
            valor="3"
            icone={<FiAlertCircle />}
          />

          <StatsCard
            titulo="Tempo restante"
            valor="10h"
            icone={<FiClock />}
          />

        </div>

        <ProgressBar porcentagem={50} />

        <section className="dashboard-tasks">

          <h2>Tarefas Diárias</h2>

          <TaskCard
            titulo="Estudar React"
            materia="Front-End"
            tempo="2 horas"
            prioridade="Alta"
          />

          <TaskCard
            titulo="Modelagem ER"
            materia="Banco de Dados"
            tempo="1 hora"
            prioridade="Média"
          />

          <TaskCard
            titulo="Projeto Python"
            materia="Programação"
            tempo="3 horas"
            prioridade="Baixa"
          />

        </section>

      </main>

    </div>
  );
}