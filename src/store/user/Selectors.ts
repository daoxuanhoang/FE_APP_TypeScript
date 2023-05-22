import { createSelector } from "@reduxjs/toolkit";
import { IDataStore } from "../../types/app";

const selector = (state: { user: IDataStore }) => state.user;
export const getError = createSelector(selector, ({ error }: any) => error);

export const getLoading = createSelector(
  selector,
  ({ loading }: any) => loading
);

export const getAuthUser = createSelector(selector, (user) => user.data);
