// Proces.argv.forEach((index, value) =>{
//     console.log('${index}: ${value}');
// });

// const colors = ["blue", "red"];
// console.table(colors);

// const fruits = {apple:15, grape:20};
// console.table(fruits);

// const name = () => console.log('nombr de ejemplo');

// const duration = () =>{

//     console.time('name()');

//     name();
//     console.timeEnd;

// }


const data = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const age = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });


data.question("escribir nombre: ", name => {
    console.log(`hola ${name}`);
    

data.question("escribir edad: ", age => {

        if (age > 18) {
            console.log('edad mayor a 18');
        } else {
            console.log('edad menor a 18');
        };
    
        
    });


    const opeation = require('./funtions.js');

    // console.log('Resultado de suma: ${operation.sum(5,6)}');

    
});







// const opeation = require('./funtions.js');

// console.log('Resultado de suma: ${operation.sum(5,6)}');

// pets.forEach((pet)=> {
//     console.log(pet);
    
// });