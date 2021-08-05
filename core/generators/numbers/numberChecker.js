import {
  checkNumberTyping
} from "../../../utils/checkIfNumber";
import {
  googleStrategyResult
} from "./strategies/google.com";
let checkValidNumber = (async () => {
  let n = await googleStrategyResult
  console.log(n)
  let value = checkNumberTyping(n)
  return value
})()
export {
  checkValidNumber
}