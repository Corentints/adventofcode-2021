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
  const direction = current.split(" ")[0];
  const value = Number(current.split(" ")[1]);

  if (direction === "forward") {
    return {
      ...position,
      x: (position.x += value),
      y: (position.y += position.aim * value),
    };
  }
  if (direction === "up") return { ...position, aim: (position.aim -= value) };
  if (direction === "down")
    return { ...position, aim: (position.aim += value) };
};

const finalPosition: Position = entry.reduce(calcPosition, {
  x: 0,
  y: 0,
  aim: 0,
});

console.log(finalPosition.x * finalPosition.y);
