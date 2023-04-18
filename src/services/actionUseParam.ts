import { IParamsRequest } from "../types/user";

export const REFRESH_TOKEN_ACT: IParamsRequest = {
  action: "ConnectDB",
  data: [
    {
      appId: "CRM-KIT",
      refreshToken: "",
      salt: "",
    },
  ],
};
