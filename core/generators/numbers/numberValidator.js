import {
  checkNumberTyping
} from "../../../utils/checkIfNumber";
import {
  googleStrategyResult
} from "./strategies/google.com";
let checkGoogleStrategyResult = (async () => {
  let n = await googleStrategyResult
  let value = checkNumberTyping(n)
  return [value, n]
})()
import {memoryStrategy} from '../numbers/strategies/memory'
let checkMemoryStrategy = (async () => {
  let n = memoryStrategy
  let value = checkNumberTyping(n)
  return [value,n]
})()
let validNumbers = [checkGoogleStrategyResult, checkMemoryStrategy]
export {
  validNumbers
}