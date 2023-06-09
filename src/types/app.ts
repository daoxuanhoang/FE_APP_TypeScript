import { EnumNotificationType, EnumValueType } from "../utils/constants";
import { IUser } from "./user";

export interface IKeyAuth {
  authToken: string;
  refreshToken: string;
  updateParent?: boolean;
}

export interface IAppState {
  loading: boolean;
  language: string;
  data?: IUser;
  accessToken?: string;
}

export interface IDataStore {
  isLoading?: boolean;
  data?: any;
  error?: string | null;
}

export interface INofifyState {
  message: string;
  type: keyof typeof EnumNotificationType;
  options: {
    position: {
      vertical: "top" | "bottom";
      horizontal: "left" | "center" | "right";
    };
    autoHideDuration: number;
    useI18n: boolean;
  };
}

export type IValueType = keyof typeof EnumValueType;
