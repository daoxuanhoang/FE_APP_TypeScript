/** @format */

import { IDataStore } from "../app";
import { IParamsRequest, IResponse } from "../user";

export type ICallback = (results: IResponse) => void;

export interface IPayload {
  formData: IParamsRequest;
  dataKey?: string;
}

export interface IActionPayload {
  payload: IPayload;
  callback?: ICallback;
}
