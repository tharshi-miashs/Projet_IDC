

var result;
var url_monney = "https://api.exchangeratesapi.io/latest";
var url_pays = "https://restcountries.eu/rest/v2/all";



fetch(url_monney)
.then(function(response){
  response.json()
  .then(function(data){
    result = data;
    console.log(result);

  })
})

fetch(url_pays)
.then(function(response){
  response.json()
  .then(function(data){
    result = data;
    console.log(result);

  })
})
