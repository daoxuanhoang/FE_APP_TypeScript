import { createSlice } from "@reduxjs/toolkit";
import { IDataStore } from "../../types/app";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    error: null,
  } as IDataStore,
  reducers: {
    actionRequest: (state) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    getDataSuccess: (state, { payload }: { payload: Partial<IDataStore> }) => {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null,
      };
    },
    requestDataStore: (
      state,
      { payload }: { payload: Partial<IDataStore> }
    ) => ({
      ...state,
      ...payload,
    }),
  },
});

export const { actionRequest, getDataSuccess, requestDataStore } =
  homeSlice.actions;

export default homeSlice.reducer;
