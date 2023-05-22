/** @format */
import { all } from "redux-saga/effects";
import homeSagas from "./home/Sagas";
import userSagas from "./user/Sagas";

export default function* rootSaga() {
  yield all([homeSagas(), userSagas()]);
}
