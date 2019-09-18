// loop over iterable properties
    //iterable meaning able to 'parse' through with numbers

    
    //we cannot use a for of loop with an object because objects do not have indexes or iterable properties - objects are enumerable
    let student = {
        name: 'Peter',
        awesome: true,
        degree: 'JavaScript',
        week: 1
    };
    
    for(let item of student) {
         console.log(item);
    }
    // dog calls each index within the array
    // for of loops are for arrays
    // for in loops are for objects
    
    let dogArray = ['husky', 'german shepard', 'pug', 'border collie', 'chihuahua'];

    for (dog of dogArray) {
        console.log(dog, 'goes bark');
    }