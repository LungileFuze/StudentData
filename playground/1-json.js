const fs = require('fs')

const book = {
    tittle: "The subtle art of not giving a fuck.",
    author: "Mark Manson"
}

// console.log(book.tittle)

// const stringBook = JSON.stringify(book)
// console.log(stringBook)

// const JSONbook = JSON.parse(stringBook)
// console.log(JSONbook)

// fs.writeFileSync('1-book-json', stringBook)

const dataBuffer = fs.readFileSync('1-book-json')
console.log(dataBuffer.toString())


