const fs = require('fs')
// const chalk = require('chalk')

const getStudents = () => {
    console.log("Getting students")
}

//Pushing a student to a array
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
        console.log(`${name} was added succefully!!`)
    } else {
        console.log("Record aleady exist")
    }
}

//Removing a student
const removeStudent = (name) => {
    const students = loadStudents();

    const filteredStudents = students.filter((student) =>  student.name !== name )

    if (filteredStudents.length < students.length) {
        saveStudents(filteredStudents);
        console.log(`Student ${name} removed successfully!`)
    } else {
        console.log(`Student ${name} not found.`)
    }
}

// const listAllStudents = () => {
    
//     const students = loadStudents();

//     students.forEach( student => {
//         console.log("Name: " + student.name + ", Age: " + student.age + ", Class: " + student.class);
//         console.log("-----------------------------------------------");
//     });
// }

// console.log(listAllStudents())


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

const saveStudents = (students) => {
    const stringData = JSON.stringify(students)
    fs.writeFileSync('student.json', stringData)
}

const listStudents = () => {
    
    const students = loadStudents()

    students.forEach(student => {
        console.log("Name: " + student.name + ", Age: " + student.age + ", Class: " + student.class)
    });
}
console.log(listStudents())

const readStudent = (name) => {

    const students = loadStudents()

    const foundStudent = students.find(student => student.name === name)

    if(foundStudent) {
        console.log("Student found")
        console.log("Name: " + foundStudent.name + ", Age: " + foundStudent.age + ", Class: " + foundStudent.class)
    }
}



module.exports = {
    getStudents:getStudents,
    addStudents:addStudents,
    removeStudent:removeStudent,
    listStudents:listStudents,
    readStudent:readStudent

}