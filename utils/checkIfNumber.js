import {
  numbers
} from './jsonToExports'

function checkNumberTyping(n) {
  let temp = n.toString()
  let tempArray = temp.split(/(?<=)/gm)
  for (let i = 0; i < tempArray.length; i++) {
    if (!numbers.includes(+tempArray[i]))
      return false
  }
  return true
}
export {
  checkNumberTyping
}