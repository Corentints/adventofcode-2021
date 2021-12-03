import inquirer from "inquirer";
import * as child from "child_process";
import * as fs from "fs";

const askExercise = () => {
  const questions = [
    {
      name: "day",
      type: "number",
      message: "Enter the day number: [1-25]",
      validate: (value: number) => {
        if (value > 0 && value < 26) {
          return true;
        } else {
          return "Please enter the day number. [1-25]";
        }
      },
      filter: (input: string) => {
        return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
      },
    },
    {
      name: "exercise",
      type: "number",
      message: "Enter the exercise number: [1-2]",
      validate: (value: number) => {
        if (value > 0 && value < 26) {
          return true;
        } else {
          return "Please enter the exercise number. [1-2]";
        }
      },
      filter: (input: string) => {
        return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
      },
    },
  ];
  return inquirer.prompt(questions);
};

(async () => {
  const { day, exercise } = await askExercise();
  const filePath = `.build/days/${day}/${exercise}.js`;
  if (fs.existsSync(filePath)) {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `-- Day ${day} && Exercise ${exercise} --`
    );
    child.fork(filePath);
  } else {
    console.log("Exercise does not exist :(");
  }
})();
