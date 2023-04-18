import { takeEvery, put, all } from "redux-saga/effects";
import { HomeActions } from "./Actions";
import { IHomeActionPayload } from "../../types/apis/api";
import { actionRequest, getDataSuccess } from "./Reducers";
import { IResponse } from "../../types/user";
import axiosClient from "../../utils/axios";
import axios from "axios";
// import { INofifyState } from "../../types/app";

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs: IResponse = yield axiosClient.get(
      `${`${process.env.REACT_APP_URL}/users?page=1&perPage=10`}`
      // JSON.stringify(action.payload.formData)
    );

    // const rs: IResponse = yield axios({
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzVklBbGdQIiwibmFtZSI6Ilh1w6JuIEhvw6BuZyIsImF2YXRhciI6Imh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLzEwMTUzNzQ5NTg5MzYwNC9waWN0dXJlP3R5cGU9bGFyZ2UiLCJ0eXBlIjoidXNlciIsImxhbmdJZCI6InZpIiwiYmlydGhkYXkiOiIxOTk5LTAzLTI3VDE3OjAwOjAwLjAwMFoiLCJlbWFpbCI6ImRhb3h1YW5ob2FuZy4yMDE2QGdtYWlsLmNvbSIsInBob25lIjoiIiwiaWF0IjoxNjgwNzY5NTg1LCJleHAiOjE3MTIzMjcxODV9.zI1I3pK4ZlaHh0hA-kjg30pguG5dgzAPs4WSgocl09Y`,
    //   },
    //   method: "get",
    //   url: `https://beta.vstation.vn/api/v1/teams/types/highlights?search=&sportType=all&page=1&perPage=12&lang=vi`,
    // }).then((res) => res);

    // Case passing datakey set data at here and dint callback
    if (action.payload.dataKey)
      yield put(getDataSuccess({ [action.payload.dataKey]: rs }));
    return action?.callback?.(rs);

    // yield put(error({ message: rs.result.message } as INofifyState));
  } catch (error) {
    console.log(error);
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
