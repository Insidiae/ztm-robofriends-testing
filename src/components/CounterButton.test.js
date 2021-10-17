import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterButton from "./CounterButton";

describe("<CounterButton />", () => {
  it("renders properly", () => {
    const mockColor = "red";
    const { container } = render(<CounterButton color={mockColor} />);

    expect.assertions(1);
    expect(container).toMatchSnapshot();
  });

  it("correctly increments the counter", () => {
    const mockColor = "red";
    const { container } = render(<CounterButton color={mockColor} />);

    const btn = container.querySelector("#counter");
    userEvent.click(btn);
    userEvent.click(btn);
    expect(btn).toHaveTextContent("2");
  });
});
