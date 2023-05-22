import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    actionRequest: (state) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    loginSuccess: (state, { payload }: any) => {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
    loginFailure: (state, { payload }: any) => {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
  },
});

export const { actionRequest, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
