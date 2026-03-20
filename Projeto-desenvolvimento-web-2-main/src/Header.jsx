import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Pousada Pedra Furada</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/relatorios">Relatórios</Link>
      </nav>
    </header>
  );
}

export default Header;