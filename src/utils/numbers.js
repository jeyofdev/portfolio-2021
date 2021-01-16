/**
 * Return numbers less than 10 with zero
 *
 * @param {number} number
 */
const getNumberWithZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

export default getNumberWithZero;
