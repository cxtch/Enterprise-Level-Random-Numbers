import {
  generateKeyPairSync,
} from "crypto";
import {
  secret
} from './SECRET_DO_NOT_OPEN'
const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: secret
  }
});
export {
  publicKey,
  privateKey
}