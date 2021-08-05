import {
  encryptPublicNumber
} from "../../utils/crypto/encryptNumber";
import {
  algorithmProduct
} from "../handlers/algorithmRunner";
let encryptedAlgorithmProduct = (async () => {
  let algorithmProductFinal = await algorithmProduct
  let encryptedRandom = encryptPublicNumber(algorithmProductFinal)
  return encryptedRandom
})()
export {
  encryptedAlgorithmProduct
}