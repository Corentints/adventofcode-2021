import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 1,
  entry: 1,
  separator: "\n",
});

const sumArray = (sum: number, current: number): number => sum + current;

const sumIncreased = (sum: number, current: number, iterator: number, array: Array<number>): number => {
  return array.slice(iterator + 1, iterator + 4).reduce(sumArray, 0) > array.slice(iterator, iterator + 3).reduce(sumArray, 0) ? sum + 1 : sum;
}

const totalIncreased: number = entry.map((line) => parseInt(line)).reduce(sumIncreased, 0)
console.log(totalIncreased + " three-measurements are larger than the previous measurement.");
