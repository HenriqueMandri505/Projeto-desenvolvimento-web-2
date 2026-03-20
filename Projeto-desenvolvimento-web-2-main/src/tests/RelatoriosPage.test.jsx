import { render, screen } from "@testing-library/react";
import RelatoriosPage from "../pages/RelatoriosPage";

describe("RelatoriosPage.jsx — Exibição de relatórios de desempenho", () => {
  test("deve renderizar os dados do relatório corretamente", () => {
    render(<RelatoriosPage />);
    expect(screen.getByText("Total de tarefas: 10")).toBeInTheDocument();
    expect(screen.getByText("Concluídas: 6")).toBeInTheDocument();
    expect(screen.getByText("Em andamento: 3")).toBeInTheDocument();
    expect(screen.getByText("Pendentes: 1")).toBeInTheDocument();
  });
});