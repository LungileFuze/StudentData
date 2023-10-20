import {
  getStudents,
  addStudents,
  removeStudent,
  listStudents,
  readStudent,
} from "./students.mjs";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

//Adding a student
yargs(hideBin(process.argv))
  .command({
    command: "add",
    description: "Adding a student",
    builder: {
      name: {
        describe: "Taking a student fullname",
        demandOption: true,
        type: "string",
      },
      age: {
        describe: "Taking a student age",
        demandOption: true,
        type: "number",
      },
      class: {
        describe: "Taking student grade",
        demandOption: true,
        type: "number",
      },
    },
    handler(argv) {
      console.log("Adding student...");
      addStudents(argv.name, argv.age, argv.class);
    },
  })
  .help()
  .parse();

//Removing a student
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    description: "Removing a student",
    builder: {
      name: {
        describe: "Taking a student fullname",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      console.log("Removing a student");
      removeStudent(argv.name);
    },
  })
  .help()
  .parse();

//Listing all student
yargs(hideBin(process.argv))
  .command({
    command: "list",
    description: "Listing all student",
    handler() {
      listStudents();
    },
  })
  .help()
  .parse();



//Reading students
yargs(hideBin(process.argv))
  .command({
    command: "read",
    description: "Reading a student",
    builder: {
      name: {
        describe: "Taking a student fullname",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      console.log("Reading a student");
      readStudent(argv.name);
    },
  })
  .help()
  .parse();
