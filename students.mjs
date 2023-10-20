import fs from 'fs'
import chalk from 'chalk'

const getStudents = () => {
    console.log("Getting students")
}

//Pushing a student into a array
const addStudents = (name, age, Class) => {
    
    const students = loadStudents()

    const duplicateData = students.filter((student) => student.name == name) 

    if(duplicateData.length === 0) {
        students.push ({
            name: name,
            age: age,
            class: Class
        })
        saveStudents(students)
        console.log(chalk.green(`${name} was added succefully!!`))
    } else {
        console.log(chalk.red("Record aleady exist"))
    }
}

//Removing a student
const removeStudent = (name) => {
    const students = loadStudents();

    const filteredStudents = students.filter((student) =>  student.name !== name )

    if (filteredStudents.length < students.length) {
        saveStudents(filteredStudents);
        console.log(chalk.green(`Student ${name} removed successfully!`))
    } else {
        console.log(chalk.red(`Student ${name} not found.`))
    }
}

//load students
const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync('student.json')
        const JSONdata = JSON.parse(dataBuffer.toString())
        return JSONdata

    } catch(e) {
        return []
    } 
}

//Save student
const saveStudents = (students) => {
    const stringData = JSON.stringify(students)
    fs.writeFileSync('student.json', stringData)
}

//Read student

const readStudent = (name) => {

    const students = loadStudents()

    const foundStudent = students.find(student => student.name === name)

    if(foundStudent) {
        console.log("Student found")
        console.log(chalk.yellow("Name: " + foundStudent.name + ", Age: " + foundStudent.age + ", Class: " + foundStudent.class))
    }
}

//List all students

const listStudents = () => {
    
    const students = loadStudents()

    students.forEach(student => {
        console.log(chalk.cyan("Name: " + student.name + ", Age: " + student.age + ", Class: " + student.class))
    });
}
console.log(listStudents())



export { getStudents, addStudents, removeStudent, listStudents, readStudent };