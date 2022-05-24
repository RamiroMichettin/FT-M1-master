'use strict'

function BinarioADecimal(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
  }


function DecimalABinario(num) {
  let array = [];
  let i = num;
  do {
    let resto = i % 2;
    array.push(Math.floor(resto));
    i = i / 2;
  } while (i >= 1);
  return array.reverse().join("");
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}