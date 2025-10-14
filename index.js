import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { readJSONFile } from "./utils/fileReader.js";
import { startSpinner, stopSpinner } from "./utils/spinner.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const filePath = path.join(__dirname, "data", "users.json");
  const spinner = startSpinner("Reading and processing JSON data...");

  try {
    const users = await readJSONFile(filePath);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    stopSpinner(spinner, true, "Data processed successfully!");

    console.log(chalk.green.bold("\n--- Processed User Data ---"));
    users.forEach((user) => {
      console.log(
        chalk.cyan(`ID:`),
        user.id,
        chalk.yellow(`| Name:`),
        user.name,
        chalk.magenta(`| Age:`),
        user.age
      );
    });

    const avgAge =
      users.reduce((sum, user) => sum + user.age, 0) / users.length;

    console.log(chalk.blueBright(`\nAverage Age: ${avgAge.toFixed(1)}\n`));
  } catch (error) {
    stopSpinner(spinner, false, "Error processing data!");
    console.error(chalk.red(`\n${error.message}\n`));
  }
}

main();
