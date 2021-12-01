import { Interface } from "readline";
import openEntry from "../../utils/readEntry";

const entry: Interface = openEntry(1, 1);
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
