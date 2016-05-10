#WHOIS

		var Client = Client || {};
		Client.Services = {
			Responses: {
				Available: "",//MESSAGE FOR AVAIL
				Unavailable: ""//MESSAGE FOR UNAVAIL
				OrderMessage: "" //ORDER MESSAGEE
			}
		}
		//@NEW AJAX/METHOD CREATE
		function DataInfo(){
			var xhttp = new XMLHttpRequest(); //CREATE NEW INSTANCE XMLHTTPREQ
			  xhttp.onreadystatechange = function(){
				  if(xhttp.readyState == 4 && xhttp.status == 200){
					  var DataResponse = JSON.parse(xhttp.responseText);
						function Validator(){
					 if(DataResponse.registered !== true){
					 //@DATASET RESULTS ID NEED TO BE SPECIFIED ON DOM TREE TAG SPAN OR DIV
						    document.getElementById('DataSet').innerHTML = Client.Services.Responses.Available;
						  document.getElementById('processOrder').value = document.getElementById('DomainChecker').value + Client.Services.Responses.OrderMessage; 
					  }else{
						 document.getElementById('DataSet').innerHTML = Client.Services.Responses.Unavailable;
					  }
						}
						Validator(); //@FUNC CALL TO CHECKS STATE ON PARSED JSON DATA RETURNED 
				  }else{
					  console.log('process executed'); //DEBUG TRACK
				  }
			  } //API KEY @WHOAPI.COM USES CONSOLE FREE PLAN
			xhttp.open("get",'http://api.whoapi.com/?apikey=952c8451a7a5618274bea0185cbe1fbc&r=whois&domain=google.com', true );
		  xhttp.send();	
		}
     /* Api ends */
