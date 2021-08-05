function WYSI_Algorithm(number) {
  number = +number >> 7
  number += number >> 2
  number += number >> 7
  return number
}
export {
  WYSI_Algorithm
}