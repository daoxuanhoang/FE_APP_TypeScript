import JSEncrypt from "jsencrypt";
import { KeystoreRSA } from "../assets";
import moment from "moment";
import { IValueType } from "../types/app";

const encryptRsa = new JSEncrypt();

export const encryptRSA = (msg: string) => {
  encryptRsa.setPublicKey(KeystoreRSA.keys.public);
  const encode = encryptRsa.encrypt(msg);

  return encode;
};

export const getDataType = (value: any): IValueType =>
  Object.prototype.toString.call(value).slice(8, -1) as IValueType;

export const areEqual = (prev: any, next: any) => {
  try {
    return JSON?.stringify(prev) === JSON?.stringify(next);
  } catch (error) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.error(error);
    }
    return false;
  }
};

export const getCurrentTS = () => {
  return moment().unix();
};
