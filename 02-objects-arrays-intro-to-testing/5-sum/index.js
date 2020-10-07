/**
 * Sum - returns sum of arguments if they can be converted to a number
 * @param {number} n value
 * @returns {number | function}
 */
export function sum(n = 0) {
  const add = m => m === undefined ? sum(n) : sum(n + m);
  add.valueOf = add.toString = () => {
    return n;
  };
  return add;
}
