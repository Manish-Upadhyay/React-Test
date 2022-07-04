import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import React from "react";

describe("App Component", () => {
  test("Render", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
