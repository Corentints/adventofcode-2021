import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 2,
  entry: 1,
  separator: "\n",
});

type Position = {
  x: number;
  y: number;
};

const calcPosition = (position: Position, current: string): Position => {
  const instruction = current.split(" ")[0];
  const value = parseInt(current.split(" ")[1]);

  if (instruction === "forward") position.x += value;
  if (instruction === "up") position.y -= value;
  if (instruction === "down") position.y += value;
  return position;
};

const finalInstructions: Position = entry.reduce(calcPosition, { x: 0, y: 0 });

console.log(finalInstructions.x * finalInstructions.y);
