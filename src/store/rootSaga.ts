/** @format */
import { all } from "redux-saga/effects";
import homeSagas from "./home/Sagas";

export default function* rootSaga() {
  yield all([homeSagas()]);
}
