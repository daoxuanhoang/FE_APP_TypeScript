import { IHomeActionPayload } from "../../types/apis/api";

export const HomeActions = {
  // base get method
  HOME_GET_BASE_ACTIONS: "HOME_GET_BASE_ACTIONS",
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload["payload"],
  callback?: IHomeActionPayload["callback"]
) => ({
  payload,
  type: HomeActions.HOME_GET_BASE_ACTIONS,
  callback,
});
