export interface IParamsRequest {
  action: string;
  data: any;
}

export interface IRSResult {
  status: boolean;
  message: string;
  title: string;
  data: any;
}

export interface IResponse {
  action: string;
  status: number;
  data: any;
  // result: IRSResult;
}
