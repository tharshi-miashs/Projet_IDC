

var result_monney;
var result_pays;
var url_monney = "https://api.exchangeratesapi.io/latest";
var url_pays = "https://restcountries.eu/rest/v2/all";



fetch(url_monney)
.then(function(response){
  response.json()
  .then(function(data){
    result_monney = data;
    console.log(result_monney);

  })
})

fetch(url__pays)
.then(function(response){
  response.json()
  .then(function(data){
    result_pays = data;
    console.log(result_pays);

  })
})
