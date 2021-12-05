import entryToArray from "../../utils/entryToArray";

const entry: Array<string> = entryToArray({
  day: 4,
  entry: 1,
  separator: "\n",
});

type BoardNumber = {
  value: number;
  marked: boolean;
};
type Line = Array<BoardNumber>;
type Board = Array<Line>;
type Boards = Array<Board>;

const getAllBoards = (boards: Boards, line: string): Boards => {
  if (line === "\r") {
    boards[boards.length] = []; // new board every 6 lines
  } else {
    const i = boards[boards.length] ? boards.length : boards.length - 1;
    const cleanLine = line
      .split(" ")
      .filter((v) => v !== "")
      .map((number) => {
        return { value: Number(number), marked: false }; // all numbers become BoardNumber
      });
    boards[i].push(cleanLine);
  }
  return boards;
};

const markNumbers = (numberDrawn: number, boards: Boards) => {
  boards.forEach((board) => {
    board.forEach((line) => {
      line.forEach((number) => {
        if (number.value === numberDrawn) {
          number.marked = true;
        }
      });
    });
  });
};

const getWinner = (boards: Boards): Board | null => {
  for (const board of boards) {
    const colsCountMarked = Array(board.length).fill(0); // store marked numbers count by cols
    for (const line of board) {
      line.forEach((number, colNumber) => {
        if (number.marked) {
          colsCountMarked[colNumber]++;
        }
      });
      if (line.every((number) => number.marked)) {
        return board;
      }
    }
    if (colsCountMarked.some((colCount) => colCount === board.length)) {
      // one or more cols have 5 marked numbers
      return board;
    }
  }
  return null;
};

const getBoardScore = (board: Board, lastNumberDrawn: number) => {
  let score = 0;
  board.forEach((line) => {
    line.forEach((number) => {
      if (!number.marked) score += number.value;
    });
  });
  return score * lastNumberDrawn;
};

const numbersToDraw = entry[0].split(",").map((number) => Number(number));
entry.splice(0, 1);
const boards = entry.reduce(getAllBoards, []);

for (const numberDrawn of numbersToDraw) {
  markNumbers(numberDrawn, boards);
  const winningBoard = getWinner(boards);
  if (winningBoard) {
    console.log(getBoardScore(winningBoard, numberDrawn));
    break;
  }
}
