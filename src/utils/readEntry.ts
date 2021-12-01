import { createReadStream } from "fs";
import { createInterface, Interface } from "readline";
import { resolve } from "path";
const root = resolve("./");

/**
 * @param day Exercise day
 * @param exerciseNumber Exercise number
 * @returns readline interface of exercise entry
 */
const openEntry = (day: number, exerciseNumber: number): Interface => {
  return createInterface({
    input: createReadStream(root + "/src/days/" + day + "/entries/" + exerciseNumber + ".txt"),
    output: process.stdout,
    terminal: false,
  });
};

export default openEntry;
