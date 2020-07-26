import reducer from "./reducer";
import * as actions from "./actions";

const DEFAULT_STATE = {
  user: {},
  contacts: [],
};

describe("contact reducer", () => {
  it("adds new user", () => {
    expect(
      reducer(
        DEFAULT_STATE,
        actions.addContact({
          name: "user A",
          phone: "1234567890",
        })
      )
    ).toMatchSnapshot();
  });
});

describe("user reducer", () => {
  it("updates user", () => {
    expect(
      reducer(
        DEFAULT_STATE,
        actions.updateUser({
          name: "user A",
        })
      )
    ).toMatchSnapshot();
  });
});
