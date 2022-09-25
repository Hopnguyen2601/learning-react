function* generator(number) {
  yield number;
  yield number + 5;
  return number + 30;
}

const gen = generator(10);

console.log('result 1: ', gen.next());
console.log('result 2: ', gen.next());
console.log('result 3: ', gen.next());
// console.log('result 4: ', gen.next());

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// // expected output: 20
