import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useKey } from "../hooks/useKey";
import { KEY_CONTEXT } from "./constants";
import { encryptRSA, getCurrentTS } from "./libs";
import { REFRESH_TOKEN_ACT } from "../services/actionUseParam";
import { IKeyAuth } from "../types/app";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
};

// const axiosClient: AxiosInstance = axios.create(config);
const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define a request interceptor to add authorization token to requests
axiosClient.interceptors.request.use(
  (req: any) => {
    const { getKey } = useKey();
    const token =
      getKey(KEY_CONTEXT.AUTH_TOKEN) || process.env.REACT_APP_DEFAULT_TOKEN;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err: any) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
  (res: AxiosResponse) => Promise.resolve(res.data),
  async (err: any) => {
    const originalRequest = err.config;
    if (err.response.status === 401) {
      // Handle unauthorized error
    } else if (err.response.status === 404) {
      // Handle not found error
    } else {
      // Handle other errors
    }
    return Promise.reject(err);
    // console.log(
    //   "err.response.status",
    //   err.response.status,
    //   err.config.__isRetryRequest
    // );

    // if (
    //   err &&
    //   err.response &&
    //   err.response.status === 401 &&
    //   !err.config.__isRetryRequest
    // ) {
    //   const { getKey, setKeySite } = useKey();

    //   const refreshToken = getKey(KEY_CONTEXT.REFRESH_TOKEN);
    //   const salt = encryptRSA(`${getCurrentTS()}`);
    //   const params = JSON.stringify({
    //     ...REFRESH_TOKEN_ACT,
    //     data: [{ refreshToken, salt }],
    //   }).replace(/\\n/g, "");

    //   return axios
    //     .post(
    //       `${process.env.BASE_URL}${process.env.REACT_APP_GETWAY}`,
    //       params,
    //       {
    //         headers: config.headers,
    //       }
    //     )
    //     .then(async (response: any) => {
    //       const authToken = response.data.result.data.token;
    //       const rfTK = response.data.result.data.refreshToken;

    //       originalRequest.headers = {
    //         ...originalRequest.headers,
    //         authorization: `Bearer ${authToken}`,
    //       };
    //       const key: IKeyAuth = {
    //         authToken,
    //         refreshToken: rfTK,
    //         updateParent: true,
    //       };
    //       originalRequest.__isRetryRequest = true;

    //       setKeySite(key);
    //       return axiosClient(originalRequest);
    //     })
    //     .catch(() => {
    //       //   logoutRequest();
    //       // return store.dispatch(logoutRequest());
    //     });

    //   // return store.dispatch(logoutRequest());
    // }
    // return Promise.reject(((err || {}).response || {}).data);
  }
);

export default axiosClient;
