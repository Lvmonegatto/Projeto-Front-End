import { FiCheck, FiTrash2 } from "react-icons/fi";
import { useTasks } from "../context/TaskContext";

import "../styles/taskcard.css";

export default function TaskCard({
  id,
  titulo,
  materia,
  tempo,
  prioridade,
  completed,
}) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div
      className={`task-card ${
        completed ? "completed-task" : ""
      }`}
    >
      <div>
        <h3>{titulo}</h3>

        <p>
          {materia} • {tempo}
        </p>
      </div>

      <div className="task-actions">

        <span
          className={`priority ${prioridade.toLowerCase()}`}
        >
          {prioridade}
        </span>

        <button
          className="complete-btn"
          onClick={() => toggleTask(id)}
        >
          <FiCheck />
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(id)}
        >
          <FiTrash2 />
        </button>

      </div>
    </div>
  );
}