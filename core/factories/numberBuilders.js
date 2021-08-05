import {
  validNumbers
} from "../generators/numbers/numberValidator";
import {
  encryptPublicNumber
} from "../../utils/crypto/encryptNumber";
let encrypted = (async () => {
  let valids = []
  for (let i = 0; i < validNumbers.length; i++) {
    let values = await validNumbers[i]
    if (values[0])
      valids.push(values[1])

  }
  let enc = [];
  for (let x of valids) {
    let encryptedValid = encryptPublicNumber(x)
    enc.push(encryptedValid)
  }
  return enc
})()
export {
  encrypted
}