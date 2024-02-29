// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
    return 123;
    }
    // This is a function with one parameter, but still no name
    // And using briefer syntax that might help when we get to .map and .filter
    // (n) => 2*n
    // // you can see that it is a function like this
    // console.log((n) => 2*n)
    // replace with
    const doubleNumber = (n) => 2*n
    console.log(doubleNumber)

    const simpleCalculation = doubleNumber
    console.log(simpleCalculation)


////////////////////////////////////

const uppercaseMessage = (message) => {
    return message.toUpperCase();
    }
    
// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("hello", uppercaseMessage));


//////////////////////////////////

const lowercaseMessage = (message) => {
    return message.toLowerCase();
    }
    
// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform2 = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));

//////////////////////////////////

// challenge


const notifyByEmail = (email) => {
    return 'Email sent to: '+email
}

const notifyByText = (phoneNumber) => {
    return 'Text sent to: '+phoneNumber
}

const notify = (string, functionToUse) => {
    return functionToUse(string)
}

console.log(notify('+10000000000', notifyByText))