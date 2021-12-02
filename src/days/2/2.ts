import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 2,
  entry: 1,
  separator: "\n",
});

type Position = {
  x: number;
  y: number;
  aim: number;
};

const calcPosition = (position: Position, current: string): Position => {
  const instruction = current.split(" ")[0];
  const value = parseInt(current.split(" ")[1]);

  if (instruction === "forward") {
    position.x += value;
    position.y += position.aim * value;
  }
  if (instruction === "up") position.aim -= value;
  if (instruction === "down") position.aim += value;
  return position;
};

const finalInstructions: Position = entry.reduce(calcPosition, {
  x: 0,
  y: 0,
  aim: 0,
});

console.log(finalInstructions.x * finalInstructions.y);
