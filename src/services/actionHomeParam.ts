import { IParamsRequest } from "../types/user";
import { MODULES } from "../utils/routers";

export const GET_MENU_BY_MODULE: IParamsRequest = {
  action: "ConnectDB",
  data: [
    {
      module: MODULES.USERS,
    },
  ],
};
