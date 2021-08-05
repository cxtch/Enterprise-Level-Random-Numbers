import {
  E_Algorithm
} from "../generators/algorithms/E";
import {
  A_Algorithm
} from '../generators/algorithms/A'
import {
  WYSI_Algorithm
} from '../generators/algorithms/WYSI'
import {
  algorithmChooser
} from "./algorithmDecider";
let algorithmProduct = (async () => {
  let algorithmsPromise = (async () => {
    let e = await algorithmChooser
    return e
  })()
  let algorithms = await algorithmsPromise
  let result = algorithms[0]
  if (algorithms[1].includes('E')) {
    result = E_Algorithm(+algorithms[0].join(''))
  }
  if (algorithms[1].includes('A')) {
    result = A_Algorithm(+algorithms[0].join(''))
  }
  if (result.toString().includes('727')) {
    result = WYSI_Algorithm(+result)
  }
  return result
})()
export {
  algorithmProduct
}