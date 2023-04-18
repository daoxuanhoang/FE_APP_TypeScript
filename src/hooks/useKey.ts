import { IKeyAuth } from "../types/app";
import { KEY_CONTEXT } from "../utils/constants";

export const useKey = () => {
  const HCode = window?.["HCode"];

  const setKeySite = ({
    authToken,
    refreshToken,
    updateParent = false,
  }: IKeyAuth) => {
    if (updateParent) {
      HCode.setValue(KEY_CONTEXT.REFRESH_TOKEN, refreshToken);
      HCode.setValue(KEY_CONTEXT.AUTH_TOKEN, authToken);
    }
    localStorage.setItem(KEY_CONTEXT.AUTH_TOKEN, authToken);
    localStorage.setItem(KEY_CONTEXT.REFRESH_TOKEN, refreshToken);
  };

  // custom get value
  const getKey = (key: string) => {
    return key === KEY_CONTEXT.THEME_MODE
      ? localStorage.getItem(key) || "main"
      : localStorage.getItem(key);
  };

  return {
    setKeySite,
    getKey,
  };
};
