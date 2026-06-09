import "../styles/planningsuggestion.css";

/**
 * Sistema de Planejamento Automático.
 *
 * Analisa a tarefa com maior duração
 * estimada e sugere uma distribuição
 * equilibrada ao longo da semana.
 *
 * O objetivo é evitar sobrecarga
 * acadêmica e melhorar a organização
 * da rotina de estudos.
 */
export default function PlanningSuggestion({ tasks }) {
  /**
   * Seleciona a tarefa mais longa cadastrada.
   * Utiliza o campo tempoTotal (minutos).
   */
  const tarefasAtivas = tasks.filter(
    (task) => !task.completed
  );

  const tarefaMaisLonga = [...tarefasAtivas].sort(
  (a, b) => (b.tempoTotal || 0) - (a.tempoTotal || 0)
  )[0];

  if (!tarefaMaisLonga) {
    return null;
  }

  const horas = Math.ceil(
    (tarefaMaisLonga.tempoTotal || 0) / 60
  );

  /**
   * Não sugere divisão para tarefas curtas.
   */
  if (horas <= 2) return null;

  const diasSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
  ];

  let quantidadeDias = 2;

  if (horas >= 5) quantidadeDias = 3;
  if (horas >= 7) quantidadeDias = 4;

  const horasPorDia = (
    horas / quantidadeDias
  ).toFixed(1);

  return (
    <div className="planning-card">

      <h3>⚡ Sugestão de Planejamento</h3>

      <p className="planning-description">
        A tarefa abaixo possui uma carga maior e pode
        ser distribuída ao longo da semana.
      </p>

      <div className="planning-task">
        <strong>{tarefaMaisLonga.titulo}</strong>
        <span>{horas}h estimadas</span>
      </div>

      <div className="planning-days">
        {diasSemana
          .slice(0, quantidadeDias)
          .map((dia) => (
            <div
              key={dia}
              className="planning-day"
            >
              <span>{dia}</span>

              <strong>
                {horasPorDia}h
              </strong>
            </div>
          ))}
      </div>

    </div>
  );
}