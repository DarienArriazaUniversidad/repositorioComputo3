const promise = new Promise((resolve, reject) => {
    //resolve("resolvio el promesa");
    setTimeout(() => resolve('se resolvio la promesa'), 2000)

});

promise.then((response) => {
    console.log(response)
});