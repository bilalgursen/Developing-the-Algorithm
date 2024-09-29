/**
 * @return {Function}
 */
const createHelloWorldFunc = (): (() => string) => {
  return function () {
    return "Hello World";
  };
};

const f = createHelloWorldFunc();
console.log(f()); // "Hello World"
