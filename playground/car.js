const fs = require('fs')


const readCarData = fs.readFileSync('cars.json')
console.log(readCarData)

const JSONData = JSON.parse(readCarData.toString())
console.log(JSONData)

JSONData.year = "2024"
console.log(JSONData)

const stringCars = JSON.stringify(JSONData)
console.log(stringCars)

fs.writeFileSync('cars.json', stringCars)
