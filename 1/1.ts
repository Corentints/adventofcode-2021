import { Interface } from "readline";
import openFile from "../utils/readFile";

const entry: Interface = openFile("/1/entries/1.txt");
let totalIncreased: number = 0;
let previous: number | null = null;

entry
  .on("line", (line) => {
    if (previous && parseInt(line) > previous) {
      totalIncreased += 1;
    }
    previous = parseInt(line);
  })
  .on("close", () => {
    console.log(
      totalIncreased + " measurements are larger than the previous measurement."
    );
  });
