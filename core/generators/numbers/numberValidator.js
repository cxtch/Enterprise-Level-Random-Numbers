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
let validNumbers = [checkGoogleStrategyResult]
export {
  validNumbers
}