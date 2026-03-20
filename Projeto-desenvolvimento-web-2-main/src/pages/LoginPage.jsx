import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario && senha) {
      alert(`Bem-vindo, ${usuario}!`);
      navigate("/tarefas");
    } else {
      alert("Por favor, preencha usuário e senha.");
    }
  };

  return (
    <section className="page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Usuário:
          <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}