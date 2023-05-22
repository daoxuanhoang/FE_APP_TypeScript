export const UserActions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  FORGOT_PASSWORD_SCODE: "FORGOT_PASSWORD_SCODE",
  FORGOT_PASSWORD_SPASSWORD: "FORGOT_PASSWORD_SPASSWORD",
};

export const loginRequest = (formdata: any, callback?: (t: any) => void) => ({
  formdata,
  type: UserActions.LOGIN_REQUEST,
  callback,
});
