import { useState } from "react";

import AddTaskModal from "./AddTaskModal";

import "../styles/header.css";

export default function Header({ titulo }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className="header">

        <div>
          <h1>{titulo}</h1>
        </div>

        <div className="header-right">

          <button
            className="add-btn"
            onClick={() => setOpenModal(true)}
          >
            + Adicionar tarefa
          </button>

          <div className="user">

            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="perfil"
            />

            <span>Aluno</span>

          </div>

        </div>

      </header>

      <AddTaskModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}