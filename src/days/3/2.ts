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

type Frequency = "most-common" | "least-common";

const getLinesMatchColumnCriteria = (
  lines: Array<string>,
  frequency: Frequency,
  colNumber = 0
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

  const bitToKeep = frequency === "most-common" ? bitsByOccurence[0] : bitsByOccurence[1];
  const remainingLines = lines.filter((line) => line[colNumber] === bitToKeep);
  return getLinesMatchColumnCriteria(remainingLines, frequency, colNumber + 1);
};

const oxygen = getLinesMatchColumnCriteria(entry, "most-common");
const co2 = getLinesMatchColumnCriteria(entry, "least-common");
console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
