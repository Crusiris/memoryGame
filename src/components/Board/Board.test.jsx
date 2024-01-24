import { render, screen } from "@testing-library/react";
import Board from "./Board";
import { GameContext } from "../../context/GameContextProvider";


describe("Board", () => {
  beforeEach(() => {
    render(<GameContext.Provider value={{ cards: [], newGame: jest.fn() }}>
      <Board />
    </GameContext.Provider>);
  });
  it("there is a text inside the DOM", () => {
    // "Use Dark Theme" text is only shown when the light theme is active
    expect(screen.getByText("memory game")).toBeTruthy();
  });


});