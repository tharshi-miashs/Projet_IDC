var result 
var url = "http://restcountries.eu/rest/v2/all"
fetch(url)
	.then(function(response){
			response.json()
				.then(function(data){
						result = data ;
						console.log(result);
					})
		})	
		