import React from "react";

export default function RelatoriosPage() {
  const estatisticas = {
    total: 10,
    concluidas: 6,
    emAndamento: 3,
    pendentes: 1,
  };

  return (
    <section className="page">
      <div className="card">
        <h2>Relatórios de Desempenho</h2>
        <ul>
          <li className="info-text">Total de tarefas: {estatisticas.total}</li>
          <li className="status-concluida">Concluídas: {estatisticas.concluidas}</li>
          <li className="status-em-andamento">Em andamento: {estatisticas.emAndamento}</li>
          <li className="status-atribuida">Pendentes: {estatisticas.pendentes}</li>
        </ul>
      </div>
    </section>
  );
}
