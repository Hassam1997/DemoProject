import { combineReducers } from "redux";

import requestFlags from "./requestFlags";
import network from "./network";
import testPost from "./testPost";
import auth from "./auth";
import home from "./home";

const appReducer = combineReducers({
  requestFlags,
  network,
  testPost,
  auth,
  home,
});

export default appReducer;
