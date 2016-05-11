
  /* API WHOIS Lookup 
  License: MIT Common License 
  G. Matyila - 2016
  */
  

//WHOIS REST CALL async 
function queryProcessorWhoIs(){
 var xquery = new XMLHttpRequest();
  xquery.addEventListener('readystatechange',function(){
	  if(xquery.readyState == 4 && xquery.status == 200){
	  var $container = JSON.parse(xquery.responseText);
	  if($container.registered !== true){
		services.unregistered();
	}else{
	document.getElementById('DataSet').innerHTML = services.registered;
	 }
   }
 });
  xquery.open("GET",'http://api.whoapi.com/?apikey=952c8451a7a5618274bea0185cbe1fbc&r=whois&domain=www.google.com', true);
 xquery.send();
};

//SERVICE RESPONSE FOR WHOIS
var services = {
	registered : "<img src='img/x.png' width='64px'>",
	unregistered : (function(){
		 setTimeout(function(){
			 alert('will register it for you ');
		 },5000);
	})
}	 
	
	