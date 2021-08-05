import {
  validNumbers
} from '../generators/numbers/numberValidator';
import {
  largestOfTwo
} from '../../utils/math/Math'
let algorithmChooser = (async function () {
  let validated = (async () => {
    let valids = []
    for (let i = 0; i < validNumbers.length; i++) {
      let values = await validNumbers[i]
      if (values[0])
        valids.push(values[1])
    }
    return valids
  })()
  let validatedNumbers = await validated
  let longNumber = validatedNumbers.join('')
  let algorithms = [];
  if (largestOfTwo(+longNumber[0], +longNumber[longNumber.length - 1]) == +longNumber[0])
    algorithms.push('E')
  else {
    algorithms.push('A')
  }
  if (longNumber.includes('727'))
    algorithms.push('WYSI')
  return [validatedNumbers, algorithms]
})()
export {
  algorithmChooser
}