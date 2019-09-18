//great for iterating over values in an object. Properties is an obect aer whats called 'enumerable'
    //for in loops iterate over an objects enumerable properties
    //FOR IN LOOPS ARE USED FOR OBJECTS

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
};

for(let item in student) {
    // console.log(item);
    console.log(student[item]);
}

// for in loops can grab indexes from arrays and objects
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coone', 'rag doll'];

for (cat in catArray){
    // console.log(cat);
    console.log(catArray[cat]);
}

let name = 'aLEk'
let capName;

for (let n in name){
    if (n == 0){
        capName = name[n].toUpperCase();
    }   else{
        capName += name[n].toLowerCase();
    }
}

console.log(capName);