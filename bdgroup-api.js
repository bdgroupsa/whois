
  /* API WHOIS Lookup 
  License: MIT Common License 
  G. Matyila - 2016
  */
		var Client = Client || {};
		Client.Services = {
			Responses: {
				Available: "",//MESSAGE FOR AVAIL
				Unavailable: ""//MESSAGE FOR UNAVAIL
				OrderMessage: "" //ORDER MESSAGEE
			}
		}
		function DataInfo(){
			var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function(){
				  if(xhttp.readyState == 4 && xhttp.status == 200){
					  var DataResponse = JSON.parse(xhttp.responseText);
						function Validator(){
					 if(DataResponse.registered !== true){
						    document.getElementById('DataSet').innerHTML = Client.Services.Responses.Available;
						  document.getElementById('processOrder').value = document.getElementById('DomainChecker').value + Client.Services.Responses.OrderMessage; 
					  }else{
						 document.getElementById('DataSet').innerHTML = Client.Services.Responses.Unavailable;
					  }
						}
						Validator();
				  }else{
					  console.log('process executed');
				  }
			  }
			xhttp.open("get",'http://api.whoapi.com/?apikey=952c8451a7a5618274bea0185cbe1fbc&r=whois&domain=google.com', true );
		  xhttp.send();	
		}
     /* Api ends */