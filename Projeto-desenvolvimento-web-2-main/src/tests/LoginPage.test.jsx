import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

describe("LoginPage.jsx — Comportamento do formulário de login", () => {
  beforeEach(() => {
    window.alert = jest.fn();
    jest.clearAllMocks();
  });

  test("deve exibir alerta se usuário ou senha estiverem vazios", () => {
    render(<MemoryRouter><LoginPage /></MemoryRouter>);
    fireEvent.click(screen.getByText("Entrar"));
    expect(window.alert).toHaveBeenCalledWith("Por favor, preencha usuário e senha.");
  });

  test("deve redirecionar ao preencher login corretamente", () => {
    render(<MemoryRouter><LoginPage /></MemoryRouter>);
    fireEvent.change(screen.getByLabelText("Usuário:"), { target: { value: "Maria" } });
    fireEvent.change(screen.getByLabelText("Senha:"), { target: { value: "123" } });
    fireEvent.click(screen.getByText("Entrar"));
    expect(window.alert).toHaveBeenCalledWith("Bem-vindo, Maria!");
  });
});