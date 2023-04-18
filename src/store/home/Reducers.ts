import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "../../types/app";
import { IActReducerwithCB } from "../../types/hook";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    error: null,
  } as IHomeState,
  reducers: {
    actionRequest: (state) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    getDataSuccess: (state, { payload }: { payload: Partial<IHomeState> }) => {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null,
      };
    },
    requestDataStore: (
      state,
      { payload }: { payload: Partial<IHomeState> }
    ) => ({
      ...state,
      ...payload,
    }),
    requestDataWithcb: (state, { payload }: IActReducerwithCB) => {
      return payload?.callback?.({ ...state }, (newState) => {
        return { ...newState };
      });
    },
  },
});

export const {
  actionRequest,
  getDataSuccess,
  requestDataStore,
  requestDataWithcb,
} = homeSlice.actions;

export default homeSlice.reducer;
