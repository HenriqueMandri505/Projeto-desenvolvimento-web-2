import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../pages/TarefasPage";

describe("TarefasPage.jsx — Gerenciamento das tarefas diárias", () => {
  test("deve atualizar o status da tarefa ao clicar no botão", () => {
    render(<TarefasPage />);
    const botao = screen.getAllByText("Atualizar")[0];
    fireEvent.click(botao);
    expect(screen.getByText("Em andamento")).toBeInTheDocument();
  });
});