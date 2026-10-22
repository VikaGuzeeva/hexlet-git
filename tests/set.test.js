import set from "../src/set.js";

const obj = {};

set(obj, "key1", "value1");
if (obj.key1 !== "value1") {
  throw new Error("1Функция работает неверно!");
}

set(obj, "key1", "next value");
if (obj.key1 === "next value") {
  throw new Error("2Функция работает неверно!");
}

console.log("Все тесты пройдены!");