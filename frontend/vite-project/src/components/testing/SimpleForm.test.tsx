import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimpleForm from "./SimpleForm";

describe("", () => {

  test("if disabled b4 text", () => {
    render(<SimpleForm />);

    const button = screen.getByRole("button", { name: /Submit/i });
    const input = screen.getByLabelText(/password/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "ansul" } });

    expect(button).toBeEnabled();
  });

  test("if disabled b4 text", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText(/password/i);
    expect(input).toHaveAttribute("type", "text");
    fireEvent.change(input, { target: { value: "ansul" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "password");
  });

});
