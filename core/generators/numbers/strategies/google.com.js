import request from 'superagent';
let start = Date.now();
let googleStrategyPromise = new Promise((resolve) => request('https://google.com').then((r) => {
  let googleStrategyTemp = Date.now() - start;
  resolve(googleStrategyTemp)
}))
let googleStrategyResult = (async () => {
  let timing = await googleStrategyPromise
  return timing
})()
export {
  googleStrategyResult
}