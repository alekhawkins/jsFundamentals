//act as a shortcut for writing if/else or switch statements

let num = 6;

// ternary
(num > 0) ? console.log('yes it is') : console.log('no it isnt');
// (1)   (2)                        (3)

/*
    1. parens act as our if. checks if the statement evaluates as true
    2. if statement is true, run whats after the question mark
    3. colon acts as our 'else' or catch all statement

*/

// if (num > 0) {
//     console.log('yes it is');
// }   else{
//     console.log('no it isnt');
// }

// let num = 6;

// (num == 0) ? console.log('hello') : (num < 0) ? console.log('hi') : console.log('goodbye');

// (num == 0) ? console.log('hello')
//     : (num < 0) ? console.log('hi')
//     : console.log('goodbye');

    let age = 22;

    (age >= 25) ? console.log('Yay! you can rent a car!') : (age >= 21) ? console.log('Yay! you can drink!') : (age >= 18) ? console.log('Yay! you can vote') : console.log('Sorry youre to young to do anything');