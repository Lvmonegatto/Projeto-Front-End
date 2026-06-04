import "../styles/taskcard.css";

export default function TaskCard({
  titulo,
  materia,
  tempo,
  prioridade
}) {
  return (
    <div className="task-card">

      <div>

        <h3>{titulo}</h3>

        <p>
          {materia} • {tempo}
        </p>

      </div>

      <span className={`priority ${prioridade.toLowerCase()}`}>
        {prioridade}
      </span>

    </div>
  );
}