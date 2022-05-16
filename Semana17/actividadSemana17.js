const fs = require("fs/promises");
const path = require("path");

const pathTexto = path.join(__dirname, "/agregar.csv");

const writeFileFunc = async () => {
    await fs.writeFile(pathTexto, "Nuevo dato agregado");
};


const readFileFunc = async () => {
    const texto = await fs.readFile(pathTexto, "utf-8");
    console.log(texto);
};

///////
// const question = async ("Escribir edad: ", age => {
// });

readFileFunc();
writeFileFunc();