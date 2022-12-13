import { Command } from "commander";
import { spawn } from "node:child_process";
import path from "node:path";

let program = new Command("esite");

program
  .name("esite")
  .description("a CLI tool to create and manage logs for the esite client")
  .version("0.0.1");

program
  .command("create")
  .description("Create a new log")
  .argument("<title>", "name of the blog")
  .action((title) => {
    let script = spawn(
      `bash ${path.resolve(__dirname, "../scripts/create.sh")} ${title}`
    );
    script.stdout.on("data", (chunk) => console.log(chunk));
    script.stderr.on("data", (chunk) => console.log(chunk));
  });

program.parse();
