import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Concluidas() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Concluídas" />
      </main>
    </div>
  );
}