import { useState } from "react";
import { useTasks } from "../context/TaskContext";

import "../styles/addtaskmodal.css";

export default function AddTaskModal({ isOpen, onClose }) {
  const { addTask } = useTasks();

  // Dados principais da tarefa
  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");

  // Tempo controlado por selects
  const [horas, setHoras] = useState("0");
  const [minutos, setMinutos] = useState("0");

  const [prioridade, setPrioridade] = useState("Média");
  const [dia, setDia] = useState("Segunda");

  /**
   * Cria uma nova tarefa.
   * O tempo é salvo em:
   * - formato visual (tempo)
   * - minutos totais (tempoTotal)
   *
   * Isso facilita cálculos futuros.
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo.trim() || !materia.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    const tempoTotal =
      Number(horas) * 60 +
      Number(minutos);

    addTask({
      titulo,
      materia,

      tempo: `${horas}h ${minutos}min`,

      tempoTotal,

      prioridade,
      dia,
    });

    // Limpa formulário
    setTitulo("");
    setMateria("");

    setHoras("1");
    setMinutos("0");

    setPrioridade("Média");
    setDia("Segunda");

    onClose();
  }
/**
 * O tempo estimado é controlado por seletores
 * de horas e minutos para evitar entradas
 * inválidas e garantir consistência nos cálculos
 * de produtividade e carga semanal.
 
  */
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
            onChange={(e) =>
              setTitulo(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Matéria"
            value={materia}
            onChange={(e) =>
              setMateria(e.target.value)
            }
          />

          {/* Tempo estimado */}
        <div className="time-wrapper">

          <div className="time-field">

            <label>Horas</label>

              <select
                value={horas}
                onChange={(e) =>
                  setHoras(e.target.value)
                }
              >
                {[...Array(9)].map((_, index) => (
                  <option
                    key={index}
                    value={index}
                  >
                    {index}
                  </option>
                ))}
              </select>

          </div>

          <div className="time-field">

            <label>Minutos</label>

            <select
              value={minutos}
              onChange={(e) =>
                setMinutos(e.target.value)
              }
            >
              <option value="0">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="50">50</option>
            </select>
            
          </div>

      </div>

          <select
            value={prioridade}
            onChange={(e) =>
              setPrioridade(e.target.value)
            }
          >
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>

          <select
            value={dia}
            onChange={(e) =>
              setDia(e.target.value)
            }
          >
            <option>Segunda</option>
            <option>Terça</option>
            <option>Quarta</option>
            <option>Quinta</option>
            <option>Sexta</option>
            <option>Sábado</option>
            <option>Domingo</option>
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