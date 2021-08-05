import {
  privateDecrypt
} from "crypto";
import {
  privateKey
} from "./generateKeys";
import {
  secret
} from './SECRET_DO_NOT_OPEN'

function decryptNumber(number) {
  return privateDecrypt({
    key: privateKey,
    passphrase: secret
  }, number)
}
export {
  decryptNumber
}