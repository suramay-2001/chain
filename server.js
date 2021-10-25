require('dotenv').config();
const express=require('express')
const app=express()
const https=require('https')
const apikey=process.env.POLYAPIKEY
const ethkey='ETH'
const bitkey='BTC'
const key          = process.env.KEY// API Key
const secret       = process.env.SECRET // API Private Key
const KrakenClient = require('kraken-api');
const kraken       = new KrakenClient(key, secret);
var date=new Date()
var today=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
const calleth='https://api.polygon.io/v1/open-close/crypto/'+ethkey+'/USD/'+today+'?adjusted=true&apiKey='+apikey
const callbit='https://api.polygon.io/v1/open-close/crypto/'+bitkey+'/USD/'+today+'?adjusted=true&apiKey='+apikey
var data={}
console.log(process.env.KEY)
 function getfrompolygon(call,key){
 https.get(call,function(response){
console.log(response. statusCode)
if (response.statusCode!==200){
   // console.log(response.statusCode)
}

 response.on('data',function(value){
     
const apidata= JSON.parse(value)
data[key]=[apidata.openTrades[0]['p'], apidata.closingTrades[0]['p']]
console.log(data[key])
//return apidata.open
})



    })
}
try{
(async () => {
	// Display user's balance
	console.log(await kraken.api('Balance'));

	// Get Ticker Info
	let krak=await kraken.api('Ticker', { pair : 'XXBTZUSD' });
    data['BTCkrak']=[krak.result.XXBTZUSD.h[1],krak.result.XXBTZUSD.l[0]]
    console.log(data)
})();

(async () => {
	// Display user's balance
	console.log(await kraken.api('Balance'));

	// Get Ticker Info
	let krak=await kraken.api('Ticker', { pair : 'ETHUSDT' });
    data['ETHUSDT']=[krak.result.ETHUSDT.h[1],krak.result.ETHUSDT.l[0]]
    console.log(data)
})();
    //var data={}
    getfrompolygon(calleth,ethkey)
    getfrompolygon(callbit,bitkey)

app.get('/values',function(req,res){
    res.send(data) 
    console.log(data)

    
})
}
catch(e){
    console.log(e);
}




app.listen(3002,function(req,res){
console.log('server is up and running')
})
//console.log(dat)