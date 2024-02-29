const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
];


const searchCandies = (string_fragment,max_price) => {
    let capitalized
    if(string_fragment.length < 1){
        capitalized = string_fragment.charAt(0).toUpperCase()
    }else{
        capitalized = string_fragment.charAt(0).toUpperCase()+ string_fragment.slice(1).toLowerCase()
    }   
    objects= candies
    .filter(candy => candy.name.includes(capitalized))
    .filter(candy => candy.price < max_price)
    let array = []
    objects.forEach(element => {
        array.push(element.name)
    });
    return array
}

module.exports = searchCandies;