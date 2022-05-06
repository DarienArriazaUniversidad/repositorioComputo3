function first(){
    console.log("primera func");
}

function second(callback){
    setTimeout(() =>{
        console.log("segunda func");
        callback();    
    }, 0);
    
}

function third(){
    console.log("tercera func");
}

//llamado
first();
second(third);
