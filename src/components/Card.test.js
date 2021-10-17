import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  it("renders properly", () => {
    const { container, debug } = render(
      <Card id={1} name="Rob Botterson" email="test@email.com" />
    );

    const name = screen.getByText("Rob Botterson");
    debug(name);

    expect.assertions(2);
    expect(container).toMatchSnapshot();
    expect(name).toBeInTheDocument();
  });
});
