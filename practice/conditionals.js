// const isValidLength = (phoneNumber) => {
//     const validLength = 11;
//     if (phoneNumber.length == validLength) {
//         return true;
//         } else {
//         return false;
//         }
//     }

// console.log(isValidLength('01789298781'))

///////////////////////////

const fizzBuzz = (number) => {
    if (number % 3 == 0 && number % 5 == 0){
        console.log('FizzBuzz') 
    }else if (number % 3 == 0){
        console.log('Fizz')
    }else if (number % 5 == 0){
        console.log('Buzz') 
    }else{
        console.log(number)
    }
}

console.log(fizzBuzz(7))

module.exports = fizzBuzz;