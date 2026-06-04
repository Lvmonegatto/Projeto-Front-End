import "../styles/header.css";

export default function Header({ titulo }) {
  return (
    <header className="header">

      <div>
        <h1>{titulo}</h1>
      </div>

      <div className="header-right">

        <button className="add-btn">
          + Adicionar tarefa
        </button>

        <div className="user">

          <img
            src="https://i.pravatar.cc/40"
            alt="perfil"
          />

          <span>Aluno</span>

        </div>

      </div>

    </header>
  );
}