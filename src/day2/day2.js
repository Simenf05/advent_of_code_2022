const fs = require('fs');

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split("\r\n")


function score_cal(opponent, you) {
    
    let score = 0


    switch (you) {
        case "X": score += 1; break;
        case "Y": score += 2; break;
        case "Z": score += 3; break;
    }

    //win = 6
    //draw = 3
    //lost = 0


    //A X rock
    //B Y paper
    //C Z scissors

    switch (opponent) {
        case "A":
            
            switch (you) {
                case "X": score += 3; break;
                case "Y": score += 6; break;
                case "Z": score += 0; break;
            }

            break;

        case "B":

            switch (you) {
                case "X": score += 0; break;
                case "Y": score += 3; break;
                case "Z": score += 6; break;
            }
        
            break;

        case "C":

            switch (you) {
                case "X": score += 6; break;
                case "Y": score += 0; break;
                case "Z": score += 3; break;
            }

            break;
    }


    return score
}

let score_sum = 0

for (const element of input) {
    score_sum += score_cal(...element.split(" "))
}

console.log(score_sum)