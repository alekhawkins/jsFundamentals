// loops offer us a quick and easy way to do something repeatedly, or loop over something

// NOTE: there is a danger of infinite loops

/*
    -for loops take in 3 parameters
        1.initial experssion
        2. condition
        3.increment expression
*/
//      (1)      (2)     (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//challenge: using a for loop, count to 20, by 2's

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

for (let i = 10; i >= 0; i -=1 ){
    console.log(i);
}

for (let i = 0; i >= -24; i -=2 ){
    console.log(i);
}
let name = 'Alek'

for (let i = 0; i < name.length ; i ++){
    console.log(name[i]);
}

for (let n of name){
    console.log(n);
}

//challenge: make a for loop where you add up all the number from 1 to 50 (1275)
let sum = 0

for (let i = 1; i <= 50; i++){
    sum = sum + i;
    console.log(sum);
}