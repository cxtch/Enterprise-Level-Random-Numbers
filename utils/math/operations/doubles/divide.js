function divide(x, y) {
  if (typeof x != 'number') throw new Error('TypeError: you must provide numbers')
  if (typeof y != 'number') throw new Error('TypeError: you must provide numbers')
  let i = 0;
  while (x - y > y) {
    x -= y
    i++;
  }
  let tempStr = i
  tempStr += '.' + x / y
  let result = parseFloat(tempStr)
  return result
}