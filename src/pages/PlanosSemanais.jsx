import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function PlanosSemanais() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Header titulo="Planos Semanais" />
      </main>
    </div>
  );
}