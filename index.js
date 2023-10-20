
const studentUtils = require('./students.js')
const yargs = require('yargs')



//Adding a student
yargs.command({
    command:"add",
    description:"Adding a student",
    builder: {
        name: {
            describe: "Taking a student fullname",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Taking a student age",
            demandOption: true,
            type: "number"
        },
        class: {
            describe: "Taking student grade",
            demandOption: true,
            type: "number"
        }
    },
    handler(argv) {
        // console.log("Adding student " + "Full Name: " + args.name + 
        // " Age: " + args.age + " Grade: " + args.class )
        studentUtils.addStudents(argv.name, argv.age, argv.class)
    }
    
})


//Removing a student
yargs.command({
    command: "remove",
    description: "Removing a student",
    builder: {
        name: {
            describe: "Taking a student fullname",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        // console.log("Removing a student")
        studentUtils.removeStudent(argv.name)
    }
})

//Listing all student
yargs.command({
    command: "list",
    description: "Listing all student",
    handler() {
        studentUtils.listStudents()
    }
})

yargs.parse();
//Reading students
yargs.command({
    command: "read",
    description: "Reading a student",
    builder: {
        name: {
            describe: "Taking a student fullname",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        // console.log("Reading a student")
        studentUtils.readStudent(argv.name)
    }
})



yargs.argv

//studentUtils.getStudents()

