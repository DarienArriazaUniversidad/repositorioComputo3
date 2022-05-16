var fs = require("fs");
var stringify = require("csv-stringify");

// var contenido =[
//     {"da": "Dato nuevo agregado"}
// ];


///////
// const contenido = 'agregador';
///////
// data.question("Escribir edad: ", age => {
    //////////
// var entrada=entrada;

//  .question("Escribir nombre: ", entrada => 
//     console.log(`hola ${entrada}`));
///////
// const readFileFunc = async () => {
//     const texto = await fs.readFile(pathTexto, "utf-8");
//     console.log(texto);
// };





//json de datos
var data =[
    {"CODIGO,NOMBRE": "SMIS0000, AAAA"}
];

stringify.stringify(data,  {
    header: true
}, function (err, output) {
    fs.writeFileSync(__dirname+"/data.csv", output);
});


// readFileFunc();
