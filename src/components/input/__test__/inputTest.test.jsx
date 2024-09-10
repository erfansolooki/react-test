import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { InputComp } from "../index";
import "@testing-library/jest-dom";

test("test for input component", () => {
  render(<InputComp />);
  const inputEl = screen.getByLabelText("inputLabel");
  expect(inputEl).toBeInTheDocument();

  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "cosMikham" } });
  expect(inputEl).toHaveValue("");
});
