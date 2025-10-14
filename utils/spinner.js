import ora from "ora";
import cliCursor from "cli-cursor";

export function startSpinner(message = "Processing...") {
  cliCursor.hide();
  const spinner = ora({
    text: message,
    color: "cyan",
    spinner: "dots",
  }).start();
  return spinner;
}

export function stopSpinner(spinner, success = true, message = "") {
  if (success) spinner.succeed(message || "Done!");
  else spinner.fail(message || "Failed!");
  cliCursor.show();
}
