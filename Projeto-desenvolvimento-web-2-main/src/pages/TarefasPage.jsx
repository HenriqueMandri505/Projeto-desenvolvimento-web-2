import React, { useState } from "react";

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Arrumar quarto 101", status: "Atribuída" },
    { id: 2, nome: "Lavar pátio", status: "Atribuída" },
  ]);

  const atualizarStatus = (id) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === "Atribuída"
                  ? "Em andamento"
                  : t.status === "Em andamento"
                  ? "Concluída"
                  : "Concluída",
            }
          : t
      )
    );
  };

  const getStatusClass = (status) => {
    if (status === "Atribuída") return "status-atribuida";
    if (status === "Em andamento") return "status-em-andamento";
    if (status === "Concluída") return "status-concluida";
    return "";
  };

  return (
    <section className="page">
      <div className="card">
        <h2>Tarefas do Dia</h2>
        <ul>
          {tarefas.map((t) => (
            <li key={t.id}>
              <span className="tarefa-nome">{t.nome}</span> — 
              <div className={getStatusClass(t.status)}>{t.status}</div>
              <button
                onClick={() => atualizarStatus(t.id)}
                disabled={t.status === "Concluída"}
              >
                Atualizar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
