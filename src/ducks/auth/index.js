import { makeAction, makeRequesActions } from "../ActionTypes";
import { createReducer } from "@reduxjs/toolkit";
import { Util } from "../../utils";

// action creators
export const authSignUp = makeRequesActions("AUTH_SIGNUP");
// init state
const initalState = {
  data: {},
  contentPages: {},
  deactivatelist: [],
  is_push_notification: true,
};

// init reducer
export default createReducer(initalState, (builder) => {
  builder.addCase(authSignUp.success, (state, action) => {
    const { data } = action.payload;
    state.data = data;
  });
});

// // selectors
export const getUserData = (state) => state?.auth.data;
