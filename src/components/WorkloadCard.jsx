import "../styles/workloadcard.css";

export default function WorkloadCard({ horas }) {

  /**
   * Determina o nível de carga semanal
   * baseado na soma das horas planejadas.
   */
  function calcularCarga() {

    if (horas <= 10) {
      return {
        status: "Leve",
        cor: "leve"
      };
    }

    if (horas <= 20) {
      return {
        status: "Moderada",
        cor: "moderada"
      };
    }

    return {
      status: "Alta",
      cor: "alta"
    };
  }

  const carga = calcularCarga();

  return (
    <div className="workload-card">

      <h3>Carga da Semana</h3>

      <div className={`status ${carga.cor}`}>
        {carga.status}
      </div>

      <p>{horas}h planejadas</p>

    </div>
  );
}