 import {key} from './config.js'

//var cities = ["Shanghai", "Karachi","Beijing","Delhi","Lagos","Tianjin","Istanbul","Tokyo","Guangzhou","Mumbai","Moscow","SaoPaulo","Shenzhen","Jakarta","Lahore","Seoul","Wuhan","Kinshasa","Cairo","MexicoCity","Lima","London","NewYork","Bengalaru","Bangkok","Dongguan","Chongqing","Nanjing","Tehran","Shenyang","Bogota","Ningbo","Hong Kong","Hanoi","Baghdad","Changsha","Dhaka","Hyderabad","Chennai","Rio de Janeiro","Faisalabad","Foshan","Zunyi","Santiago","Riyadh","Ahmedabad","Singapore","Shantou","Saint Petersburg","Yangon","Abidjan","Chengdu","Alexandria","Kolkata","Ankara","Surat","Johannesburg","Dar es Salaam","Suzhou","Harbin","Giza","Zhengzhou","New Taipei City","Los Angeles","	Cape Town","Yokohama","Berlin","Busan","Hangzhou","Xiamen","Quanzhou","Rawalpindi","Jeddah","Durban","Hyderabad","Kabul","Casablanca","Hefei","Pyongyang","Madrid","Peshawar","Ekurhuleni","Nairobi","Zhongshan","Pune","	Addis Ababa","Jaipur","Buenos Aires","Wenzhou"]


var cities =  ["Shanghai", "Karachi","Beijing","Delhi","Lagos","Tianjin","Istanbul","Tokyo","Guangzhou","Mumbai"];


//create an array of promises

//function promiseCreator(cityName){
//  return ( 
//    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName+"&APPID="+key).then(function(response) { 
//  return response.json();
//})
//)}



//var promisesArray = cities.map(promiseCreator);
//
//var weatherInTheBiggestCitiesOfTheWorld = [];
//Promise.all(promisesArray).then(jsonsArray => { 
//  jsonsArray.forEach( elem => {
//    var result = {city: elem.name, temperature: (Math.round(elem.main.temp-273.15)) } 
//    weatherInTheBiggestCitiesOfTheWorld.push(result) }  )  
//}).then(()=>{console.log(weatherInTheBiggestCitiesOfTheWorld)});
//
//

//second solution
//function promiseCreator(cityName){
//  return ( 
//    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName+"&APPID="+key).then(function(response) { 
//  return response.json();
//}).then(function(resJson){ return {city: resJson.name, temperature: (Math.round(resJson.main.temp-273.15)) } })
//)}
//
//var promisesArray = cities.map(promiseCreator);
//
//var weatherInTheBiggestCitiesOfTheWorld = [];
//Promise.all(promisesArray).then(function(values){
//  values.forEach( value=>{ weatherInTheBiggestCitiesOfTheWorld.push(value) } )
//  console.log (weatherInTheBiggestCitiesOfTheWorld);
//})




//third solution
//
//var startTime = ( new Date().getTime());
//function promiseCreator(cityName) {
//  return ( 
//    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName+"&APPID="+key).then(function(response) { 
//  return response.json();
//}).then(function(resJson){ return {city: resJson.name, temperature: (Math.round(resJson.main.temp-273.15)) } })
//)
//}
//
//var collectCityData = [];
//function *main(cityName) {
//		var data = yield promiseCreator( cityName );
//		//console.log( data );
//  collectCityData.push(data);
//  if (collectCityData.length===cities.length) {
//    console.log ( new Date().getTime() - startTime )
//    document.getElementById("logger").innerHTML= collectCityData;
//  } 
//}
//
//cities.forEach( (city)=>{
//  var it = main(city);
//  var p = it.next().value;
//  //console.log( (new Date()).getMilliseconds());
//  // wait for the `p` promise to resolve
//  p.then(function(data){it.next( data )
//                         //console.log( (new Date()).getMilliseconds());
//                       }, function(err){it.throw( err )});  
//}
//)

document.getElementById('logger').onclick = function Log(){
  console.log("I was clicked");
}

////fourth solution
//var startTime = ( new Date().getTime());
//var dataGatherer = [];
//
//function promiseCreator(cityName) {
//  return ( 
//    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName+"&APPID="+key).then(function(response) { 
//  return response.json();
//}).then(function(resJson){ 
//      //console.log( (new Date()).getMilliseconds());
//      //console.log({city: resJson.name, temperature: (Math.round(resJson.main.temp-273.15)) });
//      dataGatherer.push ( {city: resJson.name, temperature: (Math.round(resJson.main.temp-273.15)) } );
//      if (dataGatherer.length===cities.length){ console.log ( new Date().getTime() - startTime )
//                                                console.log(dataGatherer)}
//       })
//)}
//
////this part of the code executes almost synchronously binding the promises the one after the other. Then the promises that this function binds the one after the other are executed
////https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
//var arrayOfPromiseFactories = cities.map( city=>myPromiseFactory(city) ); 
//function executeSequentially(arrayOfPromiseFactories) {
//  var result = Promise.resolve();
//  arrayOfPromiseFactories.forEach(function (promiseFactory) {
//    result = result.then(promiseFactory);
//  });
//  return result;  
//}
//
//function myPromiseFactory(cityName) {
//  return function(){
//  return promiseCreator(cityName);
//  }
//}
////run the code
//executeSequentially(arrayOfPromiseFactories);

//var w1 = new Worker( "./webWorker.js" );
//
//w1.postMessage(1000000000);
//
//w1.addEventListener( "message", function(evt){
//	 console.log(evt.data);
//} );

