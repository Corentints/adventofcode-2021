import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 1,
  entry: 1,
  separator: "\n",
});

const sumIncreased = (sum: number, current: number, iterator: number, array: Array<number>): number => current > array[iterator - 1] ? sum + 1 : sum;

const totalIncreased: number = entry.map((line) => parseInt(line)).reduce(sumIncreased, 0)
console.log(totalIncreased + " measurements are larger than the previous measurement.");
