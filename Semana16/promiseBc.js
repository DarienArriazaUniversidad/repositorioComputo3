const axios = require('axios'); 
const fs = require('fs').promises; 
const data = response.data.bpi;

 
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json') 
    .then((response) => { 
        
        console.log('Calculo de Bitcoin actual'); 
        response.data.bpi(bc => { 
            console.log(`${bc['chartName']}`); 
        }); 
    }) 