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

const getLinesMatchColumnCriteria = (
  lines: Array<string>,
  colNumber: number,
  mostCommon: boolean = true
): string => {
  if (lines.length === 1) return lines[0];

  const occurencesByColumn = lines.reduce(
    (column: Column, current: string): Column => {
      current[colNumber] === "1" ? column.one++ : column.zero++;
      return column;
    },
    { zero: 0, one: 0 }
  );

  const bitsByOccurence =
    occurencesByColumn.one >= occurencesByColumn.zero ? ["1", "0"] : ["0", "1"];

  const bitToKeep = mostCommon ? bitsByOccurence[0] : bitsByOccurence[1];
  const remainingLines = lines.filter((line) => line[colNumber] === bitToKeep);
  return getLinesMatchColumnCriteria(remainingLines, colNumber + 1, mostCommon);
};

const oxygen = getLinesMatchColumnCriteria(entry, 0);
const co2 = getLinesMatchColumnCriteria(entry, 0, false);
console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
