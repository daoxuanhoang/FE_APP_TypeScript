import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IDataStore } from "../types/app";
import { getBaseActionsRequest } from "../store/home";
import { GET_MENU_BY_MODULE } from "../services/actionHomeParam";
import { IParamsRequest } from "../types/user";
import { loginRequest } from "../store/user";

export function useUser() {
  const dispatch = useDispatch();
  const onLogin = useCallback(
    (params: any) => {
      const { email, password } = params;
      const formData = {
        email,
        password,
      };
      dispatch(
        loginRequest(formData, (res) => {
          console.log(res);
        })
        // getBaseActionsRequest(
        //   { formData: GET_MENU_BY_MODULE, dataKey: "users" },
        //   (result) => {
        //     console.log("sd", result);

        //     // result.data[0].children = [...result.data[0].children];
        //     // dispatch(getDataSuccess({ data: result }));
        //   }
        // )
      );
    },
    [dispatch]
  );
  return {
    onLogin,
  };
}
