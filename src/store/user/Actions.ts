import { IActionPayload } from "../../types/apis/api";

export const CustomersActions = {
  // base get method
  GET_CUSTOMER_ACTIONS: "GET_CUSTOMER_ACTIONS",
  LOGIN_REQUEST_ACTION: "LOGIN_REQUEST_ACTION",
};

export const getCustomerActionsRequest = (
  payload: IActionPayload["payload"],
  callback?: IActionPayload["callback"]
) => ({
  payload,
  type: CustomersActions.GET_CUSTOMER_ACTIONS,
  callback,
});

export const loginActionsRequest = (
  formData: any,
  callback?: (t: any) => void
) => ({
  formData,
  type: CustomersActions.LOGIN_REQUEST_ACTION,
  callback,
});
