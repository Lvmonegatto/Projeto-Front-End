import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiClipboard,
  FiCalendar,
  FiCheckCircle
} from "react-icons/fi";

import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>SpeedFlow</h2>
      </div>

      <nav>

        <NavLink to="/">
          <FiHome />
          Dashboard
        </NavLink>

        <NavLink to="/tarefas">
          <FiClipboard />
          Tarefas
        </NavLink>

        <NavLink to="/planos">
          <FiCalendar />
          Planos Semanais
        </NavLink>

        <NavLink to="/concluidas">
          <FiCheckCircle />
          Concluídas
        </NavLink>

      </nav>

    </aside>
  );
}