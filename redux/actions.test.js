import * as actions from "./actions";

describe("updateUser returns actions", () => {
  it("updates the user", () => {
    expect(actions.updateUser({ name: "abcd k" })).toMatchSnapshot();
  });

  it("handles empty name", () => {
    expect(actions.updateUser({ name: "" })).toMatchSnapshot();
  });

  it("handles empty object", () => {
    expect(actions.updateUser({})).toMatchSnapshot();
  });
});

describe("logInUser returns actions", () => {
  const token = "thisIsATestToken";
  const errMessage = "incorrect creds";
  const mockLogin = (username, password) => {
    if (username === "a" && password === "b") {
      return token;
    }
    throw new Error(errMessage);
  };

  it("dipatches LOG_IN_SENT", async () => {
    const mockDispatch = jest.fn();
    await actions.logInUser("", "")(mockDispatch);
    //console.log(mockDispatch.mock.calls[0][0]);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: actions.LOG_IN_SENT,
    });
  });

  it("dispatches login success with token", async () => {
    const mockDispatch = jest.fn();
    await actions.logInUser("a", "b", mockLogin)(mockDispatch);

    expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
  });

  it("dispatches login failure with incorrect creds", async () => {
    const mockDispatch = jest.fn();
    await actions.logInUser("", "", mockLogin)(mockDispatch);

    expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
  });
});
