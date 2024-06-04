import { exec } from "child_process";

const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error("Please provide a problem number.");
  process.exit(1);
}

const filePath = `problems/${problemNumber}.js`;

exec(`node ${filePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing file: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(stdout);
});
