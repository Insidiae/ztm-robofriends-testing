import * as actions from "./actions";
import * as types from "./constants";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("should create a CHANGE_SEARCH_FIELD action", () => {
    const text = "Hey";
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  it("should create a REQUEST_ROBOTS_PENDING action", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: types.REQUEST_ROBOTS_PENDING });
  });

  it("should create a REQUEST_ROBOTS_SUCCESS action", async () => {
    const store = mockStore();
    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[1].type).toEqual(types.REQUEST_ROBOTS_SUCCESS);
  });
});
