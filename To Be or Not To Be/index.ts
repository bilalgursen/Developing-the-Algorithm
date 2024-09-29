/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val: any) {
  return {
    toBe: (a: any) => {
      if (a === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (a: any) => {
      if (a !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

/**
 * Öğrendiğim şey nesne içinde fonksyon : ile kullanılır.
 * Tip tanımlarken any kullandım çünkü kullanıcı her türlü içeriği girebilir.
 */
