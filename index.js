//Récupérer les infomartions d'un pays en fonction d'une liste de nom de pays
// et ne récupérer que quelques caractéristiques dessus

var liste_pays = [ "Spain","Australia","Bulgaria","Brazil","Canada","Switzerland","China",
                    "Czech Republic","Denmark"," United Kingdom","Hong Kong","Hungary","Indonesia","Israel","India",
                    "Iceland","Japan","Korea","Mexico","Malaysia","Norway","New Zealand","Philippines","Poland","Romania",
                    "Russia","Sweden","Singapore","Thailand","Turkey","American Samoa","South Africa"
                  ];

var url_taux = "https://api.exchangeratesapi.io/latest?symbols=";
var url_pays = "https://restcountries.eu/rest/v2/name/";

var result_pays;
var resu_taux;


for (i = 0; i < liste_pays.length; i++) {
  lien = url_pays + liste_pays[i].pays[0];
  fetch(lien)
    .then(function(response) {
      response.json()
        .then(function(data) {
          result_pays = data;
          var row = tableau.insertRow(1);
          var c1 = row.insertCell(0);
          var c2 = row.insertCell(1);
          var c3 = row.insertCell(2);
          var c4 = row.insertCell(3);
          var c5 = row.insertCell(4);
          var c6 = row.insertCell(5);
          c1.innerText = result_pays[0].name;
          c3.innerText = result_pays[0].capital;
          c4.innerText = result_pays[0].region;
          c5.innerText = result_pays[0].population;
        })
    })

}





function fetchTaux(c,devise){
  if (devise == "EUR") {
    c.innerText = 0;
  }else{
    fetch(url_taux + devise)
      .then(function(response){
        response.json()
        .then(function(data){
          c.innerText = data.rates[devise];
        })
    })
  }
}




console.log(liste_pays[0].pays[0]);
console.log(liste_pays.length);