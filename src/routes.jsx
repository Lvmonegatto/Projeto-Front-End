import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tarefas from "./pages/Tarefas";
import PlanosSemanais from "./pages/PlanosSemanais";
import Concluidas from "./pages/Concluidas";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/planos" element={<PlanosSemanais />} />
        <Route path="/concluidas" element={<Concluidas />} />
      </Routes>
    </BrowserRouter>
  );
}