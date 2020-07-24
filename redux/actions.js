import { login } from "../api";

//action types
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const LOG_IN_SENT = "LOG_IN_SENT";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILED = "LOG_IN_FAILED";

//action creators

export const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

export const addContact = (newContact) => ({
  type: UPDATE_CONTACT,
  payload: newContact,
});

//async action creator

export const logInUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOG_IN_SENT });
  try {
    const token = await login(username, password);
    dispatch({ type: LOG_IN_SUCCESS, payload: token });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILED, payload: err.message });
  }
};
