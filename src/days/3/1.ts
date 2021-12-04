import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 3,
  entry: 1,
  separator: "\n",
});

type Column = {
  zero: number;
  one: number;
};

let gamma = "";
let epsilon = "";

const occurencesByColumn = (
  columns: Array<Column>,
  current: string
): Array<Column> => {
  current
    .replace("\r", "")
    .split("")
    .forEach((binary, index) => {
      if (!columns[index]) columns[index] = { zero: 0, one: 0 };
      Number(binary) ? columns[index].one++ : columns[index].zero++;
    });
  return columns;
};

entry.reduce(occurencesByColumn, []).forEach((column) => {
  const sortedValues = column.one > column.zero ? ["1", "0"] : ["0", "1"];
  gamma += sortedValues[0];
  epsilon += sortedValues[1];
});

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
