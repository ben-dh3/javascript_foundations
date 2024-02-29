const fizzBuzzUntil = require('./conditionals')

// For all numbers from 0 to 10
for (let i = 1 ; i <= 10 ; i++) {
    if(i % 2 == 0){
        console.log(i + " is even")
    }else{
        console.log(i + " is odd")
    }
}

//////////////////////////

let i = 0

while (i <= 10) {
    fizzBuzzUntil(i);

    i += 1;
} 