import { IParamsRequest } from "../types/user";
import { MODULES } from "../utils/routers";

export const GET_MENU_BY_MODULE: IParamsRequest = {
  action: "Lấy danh sách users",
  data: [
    {
      module: MODULES.USERS,
    },
  ],
};

export const GET_CUSTOMER_ACTIONS: IParamsRequest = {
  action: "Lấy thông tin khách hàng",
  data: [
    {
      module: MODULES.CUSTOMERS,
    },
  ],
};
