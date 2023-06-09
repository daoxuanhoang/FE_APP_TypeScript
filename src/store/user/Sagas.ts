import { takeEvery, put, all, select } from "redux-saga/effects";
import { CustomersActions } from "./Actions";
import { IActionPayload } from "../../types/apis/api";
// import { actionRequest, getDataSuccess } from "./Reducers";
import { IResponse, IResponseUser, IUser } from "../../types/user";
import axiosClient from "../../utils/axios";
import axios from "axios";
import { INofifyState } from "../../types/app";
import { error, success } from "../notify";
import { actionRequest, loginFailure, loginSuccess } from "./Reducers";
import { push } from "connected-react-router";

function* onGetCustomerActionsRequest(action: IActionPayload) {
  try {
    // yield put(actionRequest());
    const res: IResponse = yield axiosClient.get(
      `${`${process.env.REACT_APP_URL}/users?page=1&perPage=10`}`
    );
    // Case passing datakey set data at here and dint callback
    // if (action.payload.dataKey)
    //   yield put(getDataSuccess({ [action.payload.dataKey]: res }));
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

function* onLoginActionRequest(action: any) {
  try {
    yield put(actionRequest());
    const res: IResponseUser = yield axiosClient.post(
      `${`${process.env.REACT_APP_URL}/login`}`,
      JSON.stringify(action.formData)
    );
    if (res?.status) {
      const user: any = res.data;
      yield put(loginSuccess(user));
      yield put(push("/"));

      return action.callback?.(res);
    } else {
      yield put(error({ message: "error" } as INofifyState));
    }
  } catch (e) {
    yield put(error({ message: e } as INofifyState));
    console.log(e);
  }
}

function* watchGetCustomerActions() {
  yield takeEvery(
    CustomersActions.GET_CUSTOMER_ACTIONS as any,
    onGetCustomerActionsRequest
  );
}

function* watchLoginAction() {
  yield takeEvery(CustomersActions.LOGIN_REQUEST_ACTION, onLoginActionRequest);
}

export default function* homeSagas() {
  yield all([watchGetCustomerActions(), watchLoginAction()]);
}
