/*
var fs = require("fs");
var parse = require("csv-parse");

var parse = parse.parse({colums:true}, function(err, records){
    console.log(records);
});

fs.createReadStream(__dirname+'/listado.csv').pipe(parse);
*/

var fs = require("fs").promises;
var parse = require("csv-parse/sync");

(async function() {
    const fileContent = await fs.readFile(__dirname+'/listado.csv');
    const records = parse.parse(fileContent, {columns:true});
    console.log(records);
})();