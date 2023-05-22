import { takeEvery, put, all } from "redux-saga/effects";
import { HomeActions } from "./Actions";
import { IActionPayload } from "../../types/apis/api";
import { actionRequest, getDataSuccess } from "./Reducers";
import { IResponse } from "../../types/user";
import axiosClient from "../../utils/axios";
import axios from "axios";
import { INofifyState } from "../../types/app";
import { error, success } from "../../store/notify";

function* onGetBaseActionsRequest(action: IActionPayload) {
  try {
    yield put(actionRequest());
    const res: IResponse = yield axiosClient.get(
      `${`${process.env.REACT_APP_URL}/users?page=1&perPage=10`}`
    );
    // Case passing datakey set data at here and dint callback
    if (action.payload.dataKey)
      yield put(getDataSuccess({ [action.payload.dataKey]: res }));
    return action?.callback?.(res);
  } catch (e) {
    console.log(e);
    yield put(
      error({
        message: "text.some_thing_wrong",
        options: { useI18n: true },
      } as INofifyState)
    );
  }
}

function* watchGetBaseActions() {
  yield takeEvery(
    HomeActions.HOME_GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest
  );
}

export default function* homeSagas() {
  yield all([watchGetBaseActions()]);
}
