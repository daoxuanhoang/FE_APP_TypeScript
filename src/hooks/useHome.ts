import { useCallback } from "react";
import {
  HomeSelectors,
  getBaseActionsRequest,
  getDataSuccess,
} from "../store/home";
import { GET_MENU_BY_MODULE } from "../services/actionHomeParam";
import { useDispatch, useSelector } from "react-redux";

export const useHome = () => {
  const dispatch = useDispatch();

  const users = useSelector(HomeSelectors.getUsers);

  const onGetUsers = useCallback(() => {
    dispatch(
      getBaseActionsRequest(
        { formData: GET_MENU_BY_MODULE, dataKey: "users" },
        (result) => {
          // result.data[0].children = [...result.data[0].children];
          dispatch(getDataSuccess({ data: result }));
        }
      )
    );
  }, [dispatch]);

  return {
    onGetUsers,

    users,
  };
};
