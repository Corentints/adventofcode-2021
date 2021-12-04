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
  if (lines.length === 1) {
    return lines[0];
  }

  const occurencesByColumn = lines.reduce(
    (columns: Array<Column>, current: string): Array<Column> => {
      if (!columns[colNumber]) columns[colNumber] = { zero: 0, one: 0 };
      const colValue = current.split("")[colNumber];
      Number(colValue) ? columns[colNumber].one++ : columns[colNumber].zero++;
      return columns;
    },
    []
  );

  const sortedValues =
    occurencesByColumn[colNumber].one >= occurencesByColumn[colNumber].zero
      ? ["1", "0"]
      : ["0", "1"];

  const neededValue = mostCommon ? sortedValues[0] : sortedValues[1];
  const remainingLines = lines.filter(
    (line) => line[colNumber] === neededValue
  );
  return getLinesMatchColumnCriteria(remainingLines, colNumber + 1, mostCommon);
};

const oxygen = getLinesMatchColumnCriteria(entry, 0);
const co2 = getLinesMatchColumnCriteria(entry, 0, false);
console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
