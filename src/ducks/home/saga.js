import { take, put, fork, call } from "redux-saga/effects";
import {
  API_GET_EPISODE_DETAIL,
  API_GET_EPISODE_LIST,
  API_GET_SHOW
} from "../../config/WebService";
import { callRequest } from "../../utils/ApiSauce";
import {
  homeGetShow,
  homeGetEpisodes,
  homeGetEpisodeDetail
} from "./";
import { Util } from "../../utils";

function* watchGetShow() {
  while (true) {
    const { payload } = yield take(homeGetShow.request);
    const { identifier } = payload;
    try {
      const response = yield call(
        callRequest,
        API_GET_SHOW,
        {},
        {}
      );
      yield put(
        homeGetShow.success({
          data: response,
          identifier: identifier,
        })
      );
    } catch (error) {
      yield put(
        homeGetShow.failure({
          errorMessage: error.message,
          identifier,
        })
      );
    }
  }
}

function* watchEpisodesList() {
  while (true) {
    const {
      payload,
    } =
      yield take(homeGetEpisodes.request.type);
    const { payloadApi, cb, reset } = payload;
    try {
      const response = yield call(
        callRequest,
        API_GET_EPISODE_LIST,
        {},
        {},
      );
      yield put(
        homeGetEpisodes.success({
          data: response,
          reset,
          page: {
            totalRecords: response?.length || 0,
            nextPage: payloadApi.page,
          },
        })
      );
      cb?.(response?.data);
    } catch (error) {
      yield put(homeGetEpisodes.failure({ errorMessage: error.message }));
    }
  }
}

function* watchGetEpisodeDetail() {
  while (true) {
    const { payload } = yield take(homeGetEpisodeDetail.request);
    const { payloadApi, identifier } = payload;
    const query = Util.objectToQueryString(payloadApi);
    try {
      const response = yield call(
        callRequest,
        API_GET_EPISODE_DETAIL,
        {},
        {},
        `${payloadApi?.id}`
      );
      yield put(
        homeGetEpisodeDetail.success({
          data: response,
          identifier: identifier,
        })
      );
    } catch (error) {
      yield put(
        homeGetEpisodeDetail.failure({
          errorMessage: error.message,
          identifier,
        })
      );
    }
  }
}


export default function* root() {
  yield fork(watchGetShow);
  yield fork(watchEpisodesList)
  yield fork(watchGetEpisodeDetail)
}
