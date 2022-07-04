import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import TodoForm from "../components/TodoForm";

test("Enter Todo", () => {
  render(<TodoForm />); // render component

  // selecting a element using screen object
  let input = screen.getByTestId("todo_input");

  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "new task" } });
  expect(input.value).toBe("new task");
});
