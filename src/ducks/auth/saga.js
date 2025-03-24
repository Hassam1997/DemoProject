import { take, put, fork, call } from "redux-saga/effects";
import {
  API_SIGNUP,
} from "../../config/WebService";
import {
  DataHandler,
  UploadImageAws,
  Util,
} from "../../utils";
import { callRequest } from "../../utils/ApiSauce";
import {
  authSignUp,
  uploadImage,
} from "./";

function* watchSignUp() {
  while (true) {
    const { payload } = yield take(authSignUp.request.type);
    const { payloadApi, cb, file } = payload;
    payloadApi.device_token = yield NotificationUtil.getTokenPromise();
    try {
      const upload = yield call(
        UploadImageAws.UploadImageOnS3,
        file,
        (succes) => {
          payloadApi.profile_image_link = succes;
          DataHandler.getStore().dispatch(uploadImage({}));
        },
        (error) => {
          Util.showCustomMessage(error);
        }
      );
      const image = yield take(uploadImage.type);
      const response = yield call(callRequest, API_SIGNUP, payloadApi);
      yield put(authSignUp.success({}));
      cb?.(response?.data);
    } catch (error) {
      yield put(authSignUp.failure({ errorMessage: error.message }));
      Util.showCustomMessage(error.message);
    }
  }
}

export default function* root() {
  yield fork(watchSignUp);
}
