import { fork } from "redux-saga/effects";
import testPost from "./testPost/saga";
import auth from "./auth/saga";
import home from "./home/saga";

export default function* root() {
  yield fork(testPost);
  yield fork(auth);
  yield fork(home);
}
