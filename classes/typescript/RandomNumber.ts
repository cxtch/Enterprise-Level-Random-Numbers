import { decryptNumber } from '../../utils/crypto/decryptNumber'
import { checkNumberTyping } from '../../utils/checkIfNumber'
class Random {
  number: number | string;
  #verify = (numbers: ArrayBuffer[]) => {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
      if (checkNumberTyping(numbers[i]))
        throw new Error('This constructor should only be used internally!')
      let decrypted = decryptNumber(numbers[i]);
      result.push(decrypted.toString());
    }
    return result.join('')
  }
  constructor(numbers: ArrayBuffer[]) {
    this.number = +this.#verify(numbers)
  }
}
export {
  Random
}