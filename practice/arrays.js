// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;
// for(let i = 0; i < array.length; i++){
//     total += array[i]
// }
// console.log(total);

///////////////////////

const addToBatch = (array, number) => {
    if (array.length >= 5) {
        return array;
        }
    
        return array.concat(number);
    }

// const addToBatch = (array, number) => {
//     if(array.length <= 5){
//         return array.concat(number)
//     }else{
//         return array
//     }
// }
module.exports = addToBatch;