import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "./Message";

describe("Message Component", () => {

  test("renders init text correctly", () => {
    render(<Message />);
    const textElement = screen.getByText(/Hello World/i);
    expect(textElement).toBeInTheDocument();
  });

  test("text change", () => {
    render(<Message />);
    const button = screen.getByRole("button", { name: /Change Text/i });
    fireEvent.click(button);

    const textElement = screen.queryByText(/Hello World/i);
    const newText = screen.getByText(/Goodbye World/i);
    expect(newText).toBeInTheDocument();
    expect(textElement).not.toBeInTheDocument();
  });

});
