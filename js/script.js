'use strict';

let fullName = document.querySelector('.input--name');
let sum = 0;
let kaballahNumber = 0;

const btnCalculate = document.querySelector('.submit--name');
btnCalculate.addEventListener('click', function () {
  fullName = fullName.value;
  fullName = fullName.replace(/\s+/g, '').toLowerCase();
  // fullName = fullName.;
  // console.log(fullName);
  // debugger;
  letterToNumber(fullName);
  console.log(sum);
  sum = reduceDigits(sum);
  console.log(sum);

  // Redirect to number meaning page
  window.location.href = `../pages/message-${sum}.html`;
});

const letterToNumber = function (name) {
  for (let i = 0; i < name.length; i++) {
    switch (name[i]) {
      case 'a':
      case 'j':
      case 's':
        console.log(fullName[i] + ' = 1');
        sum += 1;
        break;
      case 'b':
      case 'k':
      case 't':
        console.log(fullName[i] + ' = 2');
        sum += 2;
        break;
      case 'c':
      case 'l':
      case 'u':
        console.log(fullName[i] + ' = 3');
        sum += 3;
        break;
      case 'd':
      case 'm':
      case 'v':
        console.log(fullName[i] + ' = 4');
        sum += 4;
        break;
      case 'e':
      case 'n':
      case 'w':
        console.log(fullName[i] + ' = 5');
        sum += 5;
        break;
      case 'f':
      case 'o':
      case 'x':
        console.log(fullName[i] + ' = 6');
        sum += 6;
        break;
      case 'g':
      case 'p':
      case 'y':
        console.log(fullName[i] + ' = 7');
        sum += 7;
        break;
      case 'h':
      case 'q':
      case 'z':
        console.log(fullName[i] + ' = 8');
        sum += 8;
        break;
      case 'i':
      case 'r':
        console.log(fullName[i] + ' = 9');
        sum += 9;
        break;
      default:
        console.log('letter not founded...');
    }
  }
};

const reduceDigits = function (sum) {
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
};
