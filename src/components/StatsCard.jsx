import "../styles/statscard.css";

export default function StatsCard({ titulo, valor, icone }) {
  return (
    <div className="stats-card">

      <div className="stats-header">
        <span>{titulo}</span>
        <span className="stats-icon">{icone}</span>
      </div>

      <h2>{valor}</h2>

    </div>
  );
}import "../styles/statscard.css";

