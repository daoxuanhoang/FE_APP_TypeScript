import { EnumNotificationType } from "../utils/constants";

export interface IKeyAuth {
  authToken: string;
  refreshToken: string;
  updateParent?: boolean;
}

export type IDataStore<T> = {
  isLoading?: boolean;
  data?: T;
  error?: string | null;
};

export interface IHomeState {
  loading?: boolean;
  error?: string | null;
  users?: any;
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
