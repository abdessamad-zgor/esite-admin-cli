import { Command } from "commander";
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "fs"

let program = new Command("esite");

program
  .name("esite")
  .description("a CLI tool to create and manage logs for the esite client")
  .version("0.0.1");

//   create command to create a new log
/**
 * -w : dependencies to add
 *
 */
program
  .command("create")
  .description("Create a new log")
  .argument("<title>", "name of the log")
  .option("-w, --with [deps]", "add project dependencies")
  .action((title, options) => {
    let failed = false;
    console.log(title);
    let script = spawn(`${path.resolve(__dirname, "../scripts/create.sh")}`, [
      title,
    ]);
    script.stdout.on("data", (chunk) =>
      console.log((chunk as Buffer).toString())
    );
    script.stderr.on("data", (chunk) => {
      failed = true;
      console.log((chunk as Buffer).toString());
    });
  });

program
  .command("remove")
  .description("remove the specified log")
  .argument("<dirname>", "directory of the log")
  .action((dirname) => {
    let script = spawn(`${path.resolve(__dirname, "../scripts/delete.sh")}`, [
      dirname,
    ]);
    script.stdout.on("data", (chunk) =>
      console.log((chunk as Buffer).toString())
    );
    script.stderr.on("data", (chunk) => {

      
      console.log((chunk as Buffer).toString());
    });
  });

program.parse();
