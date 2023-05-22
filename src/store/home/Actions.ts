import { IActionPayload } from "../../types/apis/api";

export const HomeActions = {
  // base get method
  HOME_GET_BASE_ACTIONS: "HOME_GET_BASE_ACTIONS",
};

export const getBaseActionsRequest = (
  payload: IActionPayload["payload"],
  callback?: IActionPayload["callback"]
) => ({
  payload,
  type: HomeActions.HOME_GET_BASE_ACTIONS,
  callback,
});
