import { createSelector } from "@reduxjs/toolkit";
import { IHomeState } from "../../types/app";

const selector = (state: { home: IHomeState }) => state.home;
export const getError = createSelector(selector, ({ error }: any) => error);

export const getLoading = createSelector(
  selector,
  ({ loading }: any) => loading
);

export const getUsers = createSelector(selector, (home) => home.users);
