/** @format */

import { IHomeState } from "../app";
import { IParamsRequest, IResponse } from "../user";

export type ICallback = (results: IResponse["result"]) => void;

export interface IPayloadHome {
  formData: IParamsRequest;
  dataKey?: keyof IHomeState;
}

export interface IHomeActionPayload {
  payload: IPayloadHome;
  callback?: ICallback;
}
