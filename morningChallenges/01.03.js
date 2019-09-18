/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let fb = 10;

switch (true) {
    case (fb % 3 === 0 && fb % 5 === 0):
    console.log('fizz buzz');
        break;
    case (fb % 5 === 0):
    console.log('Buzz');
        break;
    case (fb % 3 === 0):

        console.log('Fizz');
    default:
        console.log(fb);
}