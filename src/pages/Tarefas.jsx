import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Tarefas() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Tarefas" />
      </main>
    </div>
  );
}