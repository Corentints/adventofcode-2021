import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 5,
  entry: 1,
  separator: "\n",
});

type Diagram = Array<Array<number | null>>;

const diagram: Diagram = [];

entry.forEach((line) => {
  const coords = line.split("->");
  const [x1, y1] = coords[0].split(",").map((coord) => Number(coord));
  const [x2, y2] = coords[1].split(",").map((coord) => Number(coord));

  let constantCoord, startCoord, endCoord;

  if (x1 === x2) {
    [constantCoord, startCoord, endCoord] = [x1, y1, y2];
  } else if (y1 === y2) {
    [constantCoord, startCoord, endCoord] = [y1, x1, x2];
  }

  if (constantCoord) {
    for (
      let index = startCoord;
      startCoord < endCoord ? index <= endCoord : index >= endCoord;
      startCoord < endCoord ? index++ : index--
    ) {
      const y = constantCoord === y1 && constantCoord === y2 ? y1 : index;
      const x = constantCoord === x1 && constantCoord === x2 ? x1 : index;

      if (!diagram[y]) diagram[y] = [];
      !diagram[y][x] ? (diagram[y][x] = 1) : diagram[y][x]++;
    }
  }
});

const linesoverlapped = diagram
  .flat()
  .reduce((countLinesOverlapped: number, value: number | null) => {
    if (value >= 2) {
      countLinesOverlapped++;
    }
    return countLinesOverlapped;
  }, 0);

console.log(linesoverlapped);
