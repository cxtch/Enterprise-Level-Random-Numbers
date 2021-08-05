import {
  Random
} from '../../classes/javascript/RandomNumber'
import {
  encryptedAlgorithmProduct
} from './numberBuilders'
let final = (async () => {
  let encryptedPromise = (async () => {
    let values = await encryptedAlgorithmProduct
    return values
  })()
  let values = await encryptedPromise
  return new Random(values)
})
export {
  final
}