import { put, takeEvery } from "redux-saga/effects";
import { IResponseUser } from "../../types/user";
import axiosClient from "../../utils/axios";
import axios, { all } from "axios";
import { actionRequest, loginSuccess } from "./Reducers";
import { UserActions } from "./Actions";

function* loginRequest(action: any) {
  console.log(action);
  try {
    put(actionRequest());
    const res: IResponseUser = yield axiosClient.post(
      `${`${process.env.REACT_APP_URL}/login`}`,
      JSON.stringify(action)
    );
    // yield put(actionRequest());
    // const res: any = yield axios({
    //   method: "post",
    //   url: `${process.env.REACT_APP_URL}/login`,
    //   data: action,
    // }).then((res) => res.data);
    console.log(res);
    // yield put(loginSuccess({ user: res }));
    return action.callback?.(res);
    //   if(result)
  } catch (error) {
    console.log(error);
  }
}

function* watchLogin() {
  yield takeEvery(UserActions.LOGIN_REQUEST, loginRequest);
}

export default function* userSagas() {
  yield all([watchLogin()]);
}
