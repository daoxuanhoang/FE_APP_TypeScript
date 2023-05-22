export interface IUser {
  id: string;
  name: string;
  avatar: string;
  birthday: date;
  email: string;
  phone: number;
  gender: number;
  status: number;
}

export interface IParamsRequest {
  action: string;
  data: any;
}
export interface IResponse {
  data: any;
  total: number;
  page: number;
  perPage: number;
}

export interface IResponseUser {
  accessToken: string;
  data: any;
  status: boolean;
}
