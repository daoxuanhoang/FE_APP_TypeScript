import { useCallback } from "react";
import {
  HomeSelectors,
  getBaseActionsRequest,
  getDataSuccess,
} from "../store/home";
import {
  GET_CUSTOMER_ACTIONS,
  GET_MENU_BY_MODULE,
} from "../services/actionHomeParam";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerActionsRequest } from "../store/user";

export const useHome = () => {
  const dispatch = useDispatch();

  const users = useSelector(HomeSelectors.getUsers);

  const onGetUsers = useCallback(() => {
    dispatch(
      getBaseActionsRequest(
        { formData: GET_MENU_BY_MODULE, dataKey: "users" },
        (result) => {
          dispatch(getDataSuccess({ data: result }));
        }
      )
    );
  }, [dispatch]);
  const onGetCustomers = useCallback(() => {
    dispatch(
      getCustomerActionsRequest(
        { formData: GET_CUSTOMER_ACTIONS, dataKey: "customers" },
        (result) => {
          // console.log("dss", result);
        }
      )
    );
  }, [dispatch]);

  return {
    onGetUsers,
    onGetCustomers,
    users,
  };
};
