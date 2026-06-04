import "../styles/progressbar.css";

export default function ProgressBar({ porcentagem }) {
  return (
    <div className="progress-container">

      <div className="progress-info">
        <span>Progresso semanal</span>
        <span>{porcentagem}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>

    </div>
  );
}