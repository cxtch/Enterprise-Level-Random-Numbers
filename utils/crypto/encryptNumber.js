import {
  publicEncrypt
} from "crypto";
import {
  publicKey
} from "./generateKeys";

function encryptPublicNumber(number) {
  return publicEncrypt(publicKey, Buffer.from(number.toString()))
}
export {
  encryptPublicNumber
}