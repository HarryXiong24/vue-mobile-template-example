import CryptoJS from "crypto-js";

// 加密
export const encrypt = (content: any) => {
  let key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");
  let message = CryptoJS.enc.Utf8.parse(content);
  let encrypted = CryptoJS.AES.encrypt(message, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

// 解密
export const decrypt = (content: any) => {
  let key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");
  let decrypt = CryptoJS.AES.decrypt(content, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};
