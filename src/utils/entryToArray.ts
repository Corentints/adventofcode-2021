import * as fs from "fs";
import { resolve } from "path";
const root = resolve("./");

type openEntryType = {
  day: number;
  entry: number;
  separator: string;
};

/**
 * 
* @param {Object} entry 
 * @param {string} employee.day - Exercise's day
 * @param {string} employee.exerciseNumber - Entry's number
 * @param {string} employee.separator - Entry file separator
 * @returns 
 */
const entryToArray = ({ day, entry, separator }: openEntryType): Array<string> => {
  const filePath =
    root + "/src/days/" + day + "/entries/" + entry + ".txt";
  return fs.readFileSync(filePath, "utf8").toString().trim().split(separator);
};

export default entryToArray;
