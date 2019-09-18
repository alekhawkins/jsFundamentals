function hi(){
    console.log('HI');
    return 'hi';
}

hi;//nothing happends
hi();// HI
console.log(hi);//[function, hi]
console.log(hi());

/*
    -the paranteses after a function immediately invoke the function thats being called
    - we get undefined because we are not returning any information or data from our function
*/
function number(){
    for (num = 0; num < 11; num++){
    console.log(num)
    }
}

number();

// - given the array, create a function that lists out of the values individually


let arr = ['This', 'is', 'really', 'cool'];

function yeah(){
    for (yeet of arr)
        console.log(yeet);
}

yeah();