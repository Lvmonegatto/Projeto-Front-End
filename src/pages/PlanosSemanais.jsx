import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useTasks } from "../context/TaskContext";

import "../styles/planos.css";

export default function PlanosSemanais() {
  const { tasks } = useTasks();

  const dias = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Plano Semanal" />

        <div className="week-grid">
          {dias.map((dia) => {
            const tarefasDoDia = tasks.filter(
              (task) => task.dia === dia
            );

            return (
              <div
                key={dia}
                className="day-card"
              >
                <h3>{dia}</h3>

                {tarefasDoDia.length === 0 ? (
                  <p>Sem tarefas planejadas</p>
                ) : (
                  tarefasDoDia.map((task) => (
                    <div
                      key={task.id}
                      className="week-task"
                    >
                      <strong>
                        {task.titulo}
                      </strong>

                      <span>
                        {task.tempo}
                      </span>
                    </div>
                  ))
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}