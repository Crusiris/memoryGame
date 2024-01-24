import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Board from "./Board";

describe("ErrorMessage", () => {
    it("renders default error state", () => {
      render(<Board/>);
    //   expect(screen.getByTestId("message-container")).toHaveTextContent(
    //     "Something went wrong"
    //   );
    });
  
    // it("renders custom error state", () => {
    //   render(<ErrorMessage message="Email is already taken" />);
    //   expect(screen.getByTestId("message-container")).toHaveTextContent(
    //     "Email is already taken"
    //   );
    // });
  });