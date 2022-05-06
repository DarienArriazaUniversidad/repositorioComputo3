const request = require('request'); 
request('https://api.coindesk.com/v1/bpi/currentprice.json', (error,response, body) => { 
    if (error) { 
        console.error(`Could not send request to API: ${error.message}`); 
        return; 



        
    } 
    if (response.statusCode != 200) { 
        console.error(`Expected status code 200 but received 
${response.statusCode}.`); 
        return; 
    } 
    console.log('Calculo de Bitcoin actual'); 
    bc = JSON.parse(body); 
    bc.forEach(bc => { 
        console.log(`${bc['time']}, ${bc['chartName']}`); 
    }); 
});