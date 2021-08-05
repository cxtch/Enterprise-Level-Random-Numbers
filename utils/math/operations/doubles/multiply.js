function multiply(x, y) {
  if (typeof x != 'number') throw new Error('TypeError: you must provide numbers')
  if (typeof y != 'number') throw new Error('TypeError: you must provide numbers')
  let i = 0;
  let result = x;
  while (i < y) {
    result += x
    i++;
  }
  return result
}
export {
  multiply
}