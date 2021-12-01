import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 1,
  entry: 1,
  separator: "\n",
});

const sumIncreased = (sum, current, iterator, array) => current > array[iterator - 1] ? sum + 1 : sum;

const totalIncreased = entry.map((line) => parseInt(line)).reduce(sumIncreased, 0)
console.log(totalIncreased + " measurements are larger than the previous measurement.");
