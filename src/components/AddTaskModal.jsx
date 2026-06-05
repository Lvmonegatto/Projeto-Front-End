import { useState } from "react";
import { useTasks } from "../context/TaskContext";

import "../styles/addtaskmodal.css";

export default function AddTaskModal({ isOpen, onClose }) {
  const { addTask } = useTasks();

  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [tempo, setTempo] = useState("");
  const [prioridade, setPrioridade] = useState("Média");

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !materia || !tempo) {
      alert("Preencha todos os campos.");
      return;
    }

    addTask({
      titulo,
      materia,
      tempo,
      prioridade,
    });

    setTitulo("");
    setMateria("");
    setTempo("");
    setPrioridade("Média");

    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Nova Tarefa</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Título da tarefa"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Matéria"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
          />

          <input
            type="text"
            placeholder="Tempo estimado"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          />

          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Salvar
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}