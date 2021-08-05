const E = "E".charCodeAt(0);
import {
  divide
}
from '../../../utils/math/operations/doubles/divide'

function E_Algorithm(number) {
  const offset = divide(+number, E);
  let placeholder = offset;
  let i = 0;
  number = number.toString().split(/(?<=)/gm);
  let n = 0;
  while (i < E) {
    let a;
    if (+number[n] % 2 == 0) {
      a = number.shift();
    } else n++;
    if (a)
      number.push(a);
    else {
      number.push(Math.abs(~number[n]))
    }
    i++;
    if (n > number.length) n = 0;
  }
  number = number.join('');
  let start = number.length / 2 - 8;
  number = number.substring(start, start + 16)
  return number
};
export {
  E_Algorithm
}