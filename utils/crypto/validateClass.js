const key = await crypto.subtle.generateKey({
  'name': 'SHA256'
}, false, ['sign', 'verify'])
const signature = await crypto.subtle.sign({
  'length': '100',
  'hash': {
    'name': 'SHA256'
  },
  'name': 'ENTERPRISE_NUMBERS',
  'saltLength': 256
}, key, randomNumber)
export {
  signature,
  key
}