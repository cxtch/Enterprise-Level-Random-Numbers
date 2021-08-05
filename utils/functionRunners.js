import {
  Script
} from "vm";
const safeFunction = function (eval) {
  let result = new Script(`(async function(){ return ${JSON.stringify(eval)}})()`, {
    'displayErrors': true
  })
  return result
}
export {
  safeFunction
}