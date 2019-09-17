

// let name = 'Alek';

// if ('Alek' == name){
//     console.log('Hello, my name is' + ' ' + name);
// }   else  {
//     console.log('Hello, what is your name', name + '?')
// }

//Bronze
let name = 'zAchARy'
// console.log(name[0]);
 if (name[0] === name[0].toUpperCase()) {
     console.log(name);
 }  else   {
     console.log('hey this isnt written correctly');
 }

 //Silver
 let name = 'ZAchARy';

 if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]);
 }  else    {
     console.log(name.slice(1).toLowerCase())
 }
// the slice() method parts of a string and returns the extravted parts in a new string.

// Gold

let name = 'ZAchARy';

if(name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console.log #1:', isUppercase);
}   else    {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console.log #2:', notUppercase);
}

// ELSE IF

let age = 22

if (age >= 25){
    console.log('Yay! you can rent a car');
}   else if (age >= 21){
    console.log('Yay! you can drink!');
}   else if (age >= 18){
    console.log('Yay! you can vote!');
}   else {
    console.log('sorry youre to young to do anything fun');
}