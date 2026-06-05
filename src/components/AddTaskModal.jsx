import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTaskModal() {

  const { addTask } = useTasks();

  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [tempo, setTempo] = useState("");
  const [prioridade, setPrioridade] = useState("Média");

  function handleSubmit(e) {

    e.preventDefault();

    addTask({
      titulo,
      materia,
      tempo,
      prioridade
    });

    setTitulo("");
    setMateria("");
    setTempo("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
      />

      <input
        placeholder="Matéria"
        value={materia}
        onChange={(e) =>
          setMateria(e.target.value)
        }
      />

      <input
        placeholder="Tempo"
        value={tempo}
        onChange={(e) =>
          setTempo(e.target.value)
        }
      />

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

      <button type="submit">
        Adicionar
      </button>

    </form>
  );
}