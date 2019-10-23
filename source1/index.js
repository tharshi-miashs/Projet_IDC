

var result;
var url = "https://api.exchangeratesapi.io/latest";



fetch(url)
.then(function(response){
  response.json()
  .then(function(data){
    result = data;
    console.log(result);

  })
})
