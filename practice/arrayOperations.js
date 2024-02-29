const checkLength = (number) => {
    if (number.length <= 10) {
        return true
    }
}

const filterLongNumbers = (numberArray) => {
    return numberArray.filter(checkLength)
}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd'
];

console.log(filterLongNumbers(numbers))

/////////////////////////////////////

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
const generateMessages = (nameArray) => {
    return nameArray.map((x) => 'Hi '+x+'! 50% off our best candies for you today!')
}

console.log(generateMessages(names))