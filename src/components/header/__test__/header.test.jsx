import { expect, test } from "vitest";
import { Header } from "../view";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("header test", () => {
  render(<Header title="VITEST COURSE" />);

  expect(screen.getByText("VITEST COURSE")).toBeInTheDocument();
});
