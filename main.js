function add(a, b) {
  return a + b;
}

let difference = add(4, 2);

console.log(difference);

function multiply(a, b) {
  let answer = 0;
  let count = 0;
  // add(a)
  while (count < b) {
    answer = add(a, answer);
    count += 1;
  }
  return answer;
}

let sum = multiply(6, 4);

console.log(sum);

function power(a, b) {
  let answer = 1;
  let count = 0;

  while (count < b) {
    answer = multiply(a, answer);
    count += 1;
  }
  return answer;
}
sum = power(2, 8);
console.log(sum);

function factorial(a) {
  let answer = 1;
  let count = 0;

  while (count < a) {
    answer = multiply(a - count, answer);
    count += 1;
  }
  return answer;
}
sum = factorial(7);
console.log(sum);
