/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

//Example 1
const arr = [1, 2, 3];
const fn = function plusone(n: number) {
  return n + 1;
};

console.log(map(arr, fn));

//Example 2
const arr2 = [1, 2, 3];
const fn2 = function plusI(n: number, i: number) {
  return n + i;
};

console.log(map(arr2, fn2));

//Example 3
const arr3 = [10, 20, 30];
const fn3 = function constant() {
  return 42;
};

console.log(map(arr3, fn3));
