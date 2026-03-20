import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// Mocka os componentes para testar apenas o roteamento por estado
jest.mock("../Layout", () => ({ children, mudarPagina }) => (
  <div data-testid="layout">{children}</div>
));

jest.mock("../pages/LoginPage", () => ({ mudarPagina }) => (
  <div>
    <div>Login Page Mock</div>
    <button onClick={() => mudarPagina("tarefas")}>Ir para Tarefas</button>
    <button onClick={() => mudarPagina("relatorios")}>Ir para Relatórios</button>
  </div>
));

jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Page Mock</div>);
jest.mock("../pages/RelatoriosPage", () => () => <div>Relatórios Page Mock</div>);

describe("App.jsx — Roteamento principal da SPA", () => {
  it("deve renderizar a página de login por padrão", () => {
    render(<App />);
    expect(screen.getByText("Login Page Mock")).toBeInTheDocument();
  });

  it("deve renderizar a página de tarefas ao navegar para 'tarefas'", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Ir para Tarefas"));
    expect(screen.getByText("Tarefas Page Mock")).toBeInTheDocument();
  });

  it("deve renderizar a página de relatórios ao navegar para 'relatorios'", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Ir para Relatórios"));
    expect(screen.getByText("Relatórios Page Mock")).toBeInTheDocument();
  });

  it("não deve renderizar tarefas na página inicial", () => {
    render(<App />);
    expect(screen.queryByText("Tarefas Page Mock")).not.toBeInTheDocument();
  });

  it("não deve renderizar relatórios na página inicial", () => {
    render(<App />);
    expect(screen.queryByText("Relatórios Page Mock")).not.toBeInTheDocument();
  });
});