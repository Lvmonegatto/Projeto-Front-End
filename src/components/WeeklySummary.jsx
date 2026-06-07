import "../styles/weeklysummary.css";

export default function WeeklySummary({
  proximaTarefa,
  pendentes,
  horasTotais,
  mensagem,
}) {

  return (
    <div className="weekly-summary">

      <h3>Resumo da Semana</h3>

      <div className="summary-item">
        <span>📌 Próxima prioridade</span>
        <strong>
          {proximaTarefa || "Nenhuma tarefa"}
        </strong>
      </div>

      <div className="summary-item">
        <span>📚 Pendentes</span>
        <strong>{pendentes}</strong>
      </div>

      <div className="summary-item">
        <span>⏱ Horas planejadas</span>
        <strong>{horasTotais}h</strong>
      </div>

      <div className="motivation-box">
        <p>{mensagem}</p>
      </div>

    </div>
  );
}