import React from "react";
import { render, screen } from "@testing-library/react";

import MainPage from "./MainPage";

describe("<MainPage />", () => {
  it("renders correctly", () => {
    const mockProps = {
      onSearchChange: jest.fn(),
      searchField: "",
      robots: [],
      error: "",
      isPending: false,
    };
    const { container } = render(<MainPage {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("displays loading text", () => {
    const mockProps = {
      onSearchChange: jest.fn(),
      searchField: "a",
      robots: [],
      error: "",
      isPending: true,
    };

    render(<MainPage {...mockProps} />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("filters robots", () => {
    const mockProps = {
      onSearchChange: jest.fn(),
      searchField: "a",
      robots: [],
      error: "",
      isPending: false,
    };

    render(<MainPage {...mockProps} />);

    expect(screen.queryByAltText("robots")).toBeNull();
  });

  it("filters robots correctly", () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
      searchfield: "Leanne",
      error: "",
      isPending: false,
    };

    render(<MainPage {...mockProps} />);

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });

  it("filters robots correctly 2", () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
      searchfield: "Xavier",
      error: "",
      isPending: false,
    };

    render(<MainPage {...mockProps} />);

    expect(screen.queryByText("Leanne Graham")).toBeNull();
  });

  it("displays error correctly", () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchfield: "nope",
      error: "Oh no, an error!",
      isPending: false,
    };

    render(<MainPage {...mockProps} />);

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  });
});
