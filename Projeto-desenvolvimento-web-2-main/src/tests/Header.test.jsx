import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("deve renderizar o título da pousada", () => {
    render(<Header mudarPagina={() => {}} />);
    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
  });
});