//5 COMIDAS TIPICAS
console.log('5 COMIDAS TIPICAS');
console.table([{ 'El Salvador': 'Pupusas', 'Mexico': 'Tacos', 'China': 'Ramen', 'Honduras': 'Valiadas', 'Estados Unidos': 'Hamburguesa' }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘


const { Interface } = require('readline');


const data = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//SOLICITAR NOMBRE
console.log('SOLICITAR NOMBRE');
data.question("Escribir nombre: ", name => {
    console.log(`hola ${name}`);
    
//SOLICITAR EDAD
console.log('SOLICITAR EDAD');
data.question("Escribir edad: ", age => {

        if (age > 18) {
            console.log('Edad mayor a 18');
        } else {
            console.log('Edad menor a 18');
        };
    
//CALCULADORA
console.log('CALCULADORA');
const calcular = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
            
    console.log(`Escriba el NUMERO del tipo de operacion que decea hace`);
        console.log("1....Suma");
        console.log("2....Resta");
        console.log("3....Multriplicacion");
        console.log("4....Divicion");
    calcular.question("", (operacion) => {
    calcular.question("Primer numero: ", num1 => {
    calcular.question("Segundo numero: ", num2 => {
                
    if (operacion == 1) {
        let sumar = Number(num1) + Number(num2);
        console.log(`La Suma es: ${sumar}`);
        process.exit();
    }
    if (operacion == 2) {
        let resta = Number(num1) - Number(num2);
        console.log(`La Resta es: ${resta}`);
        process.exit();
    }
    if (operacion == 3) {
        let division = Number(num1) / Number(num2);
        console.log(`La División es: ${division}`);
        process.exit();
    }
    if (operacion == 4) {
        let multiplicacion = Number(num1) * Number(num2);
        console.log(`La Multiplicacion es: ${multiplicacion}`);
        process.exit();
    }
    else{
        console.log(`Fallo en la operación`);
        process.exit()
    }

}); 

}); 

}); 

});
 
});
