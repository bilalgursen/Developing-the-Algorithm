/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init: number) {
  let a = init;
  let reset = init;
  return {
    increment: () => {
      a = ++a;
      return a;
    },
    reset: () => {
      a = reset;
      return a;
    },
    decrement: () => {
      a = --a;
      return a;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
