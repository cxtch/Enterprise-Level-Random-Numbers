import { decryptNumber } from '../../utils/crypto/decryptNumber'
import { checkNumberTyping } from '../../utils/checkIfNumber'
class Random {
  number: number | string;
  #verify = (numbers: ArrayBuffer[]) => {
    let result = decryptNumber(numbers)
    return result
  }
  constructor(numbers: ArrayBuffer[]) {
    this.number = +this.#verify(numbers)
  }
}
export {
  Random
}