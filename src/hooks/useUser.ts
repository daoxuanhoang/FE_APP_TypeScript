import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserSelectors,
  loginActionsRequest,
  loginSuccess,
} from "../store/user";
import { useKey } from "./useKey";

export function useUser() {
  const dispatch = useDispatch();
  const { setKeyUser } = useKey();
  const user = useSelector(UserSelectors.getAuthUser);

  const onLogin = useCallback(
    (params: any) => {
      try {
        const { email, password } = params;
        dispatch(
          loginActionsRequest({ email, password }, (result) => {
            if (result.status) {
              setKeyUser(result.data, result.accessToken);
              dispatch(loginSuccess(result.data));
              window.location.replace("/");
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return {
    onLogin,
    user,
  };
}
