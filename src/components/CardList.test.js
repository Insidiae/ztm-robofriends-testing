import React from "react";
import { render } from "@testing-library/react";
import CardList from "./CardList";

describe("<CardList />", () => {
  it("renders properly", () => {
    const mockRobots = [
      {
        id: 1,
        name: "Rob Botterson",
        email: "test@email.com",
      },
    ];
    const { container } = render(<CardList robots={mockRobots} />);

    expect.assertions(1);
    expect(container).toMatchSnapshot();
  });
});
