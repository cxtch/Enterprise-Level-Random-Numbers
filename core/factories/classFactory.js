import {
  Random
} from '../../classes/javascript/RandomNumber'
import {
  encrypted
} from './numberBuilders'
let final = (async () => {
  let encryptedPromise = (async () => {
    let values = await encrypted
    return values
  })()
  let values = await encryptedPromise
  return new Random(values)
})
export {
  final
}