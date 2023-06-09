import axios from "axios";
import { IKeyAuth } from "../types/app";
import { IUser } from "../types/user";
import { KEY_CONTEXT } from "../utils/constants";
import { encryptRSA } from "../utils/libs";
import { getCookie, setCookies } from "cookies-next";

export const useKey = () => {
  const HCode = window?.["HCode"];
  const setKeyUser = (user: IUser, accessToken: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    // if (process.env.NODE_ENV === 'development') {
    setCookies("accessToken", accessToken, {
      maxAge: 36000 * 24 * 30,
      httpOnly: false,
      secure: false,
    });
    setCookies("user", JSON.stringify(user));
    // }
  };

  // custom get value
  const getKey = (key: string) => {
    return key === KEY_CONTEXT.THEME_MODE
      ? getCookie(key) || "main"
      : getCookie(key);
  };

  return {
    getKey,
    setKeyUser,
  };
};
