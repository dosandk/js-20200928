/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (fields.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};


const pick1 = (obj, ...fields) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => fields.includes(key))
  );
};
