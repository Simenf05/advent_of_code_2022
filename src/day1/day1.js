
const fs = require('fs');

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split("\r\n")

const max_values = []

let values = 0

for (const value of input) {
    
    if (value === "") {
        max_values.push(values)
        values = 0
        continue
    }

    values += Number(value)
}

const top_three = []

for (let i = 0; i < 3; i++) {

    const biggest = Math.max(...max_values)
    const index = max_values.indexOf(biggest)
    max_values.splice(index, 1)

    top_three.push(biggest)    
}

console.log(top_three.reduce((x, y) => x + y));