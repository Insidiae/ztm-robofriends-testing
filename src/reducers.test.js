import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots()).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCH_FIELD action", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    error: "",
    isPending: false,
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots()).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      error: "",
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 123, name: "test", email: "test@email.com" }],
      })
    ).toEqual({
      robots: [{ id: 123, name: "test", email: "test@email.com" }],
      error: "",
      isPending: false,
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Oh no, an error!",
      })
    ).toEqual({
      robots: [],
      error: "Oh no, an error!",
      isPending: false,
    });
  });
});
