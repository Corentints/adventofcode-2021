import { createReadStream } from "fs";
import { createInterface, Interface } from "readline";
import { resolve } from "path";
const root = resolve("./");

const openFile = (filePath: string): Interface => {
  return createInterface({
    input: createReadStream(root + filePath),
    output: process.stdout,
    terminal: false,
  });
};

export default openFile;
