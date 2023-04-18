import JSEncrypt from "jsencrypt";
import { KeystoreRSA } from "../assets";
import moment from "moment";

const encryptRsa = new JSEncrypt();

export const encryptRSA = (msg: string) => {
  encryptRsa.setPublicKey(KeystoreRSA.keys.public);
  const encode = encryptRsa.encrypt(msg);

  return encode;
};

export const getCurrentTS = () => {
  return moment().unix();
};
