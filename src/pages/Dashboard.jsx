import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        <Header titulo="Dashboard" />

        <h2>Dashboard carregado!</h2>

      </main>

    </div>
  );
}