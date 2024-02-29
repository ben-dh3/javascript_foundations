class Rectangle {

    // A constructor, to give initial arguments.
        constructor(height, width) {
    
        // We can define attributes stored on the instance with `this`
        this.height = height;
        this.width = width;
        }
    
        // A method.
        getArea() {
        return this.height * this.width;
        }
    }
    
// Export the class
// module.exports = Rectangle;
    

///////////////////////

class User {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
    getIntroduction(){
        return 'Hi, my name is '+ this.name
    }
}
// Export the class
// module.exports = User;


/////////////////////////

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];

class userBase {
    constructor(users){
        this.users = users;
    }
    count(){
        return this.users.length
    }
    getNames(){
        return this.users.map((user) => user.getName());
    }
    getIntroductions(){
        return this.users.map((user) => user.getIntroduction())
    }
}

module.exports = userBase, User;