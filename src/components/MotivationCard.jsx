import "../styles/motivationcard.css";

export default function MotivationCard({
  progresso,
}) {

  /**
   * Define uma mensagem motivacional
   * baseada no progresso semanal.
   */
  function gerarMensagem() {

    if (progresso === 100) {
      return "🏆 Semana concluída com sucesso!";
    }

    if (progresso >= 75) {
      return "🔥 Você está quase terminando.";
    }

    if (progresso >= 50) {
      return "🚀 Ótimo progresso. Continue assim.";
    }

    if (progresso >= 25) {
      return "📚 Cada tarefa concluída faz diferença.";
    }

    return "💡 Comece pelas tarefas de maior prioridade.";
  }

  return (
    <div className="motivation-card">

      <h3>Motivação do Dia</h3>

      <p>{gerarMensagem()}</p>

    </div>
  );
}