import { random } from "./random.js";

export const getRandomElementRange = (lower = 0, upper, floating) => {
  let float = false;
  if (floating) {
    float = true;
  }

  const randomNumber = random(lower, upper, float).toFixed(floating);
  return randomNumber;
};

export const getRandomElemArr = (arr) => {
  const index = getRandomElementRange(0, arr.length - 1, 0);
  return arr[index];
};

export const getArrRandomLength = (arr) => {
  const startList = getRandomElementRange(0, arr.length - 1, 0);
  const endList = startList + getRandomElementRange(0, arr.length - 1, 0);
  const list = arr.slice([startList], [endList]);

  return list;
};
