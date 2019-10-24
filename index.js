//Récupérer les infomartions d'un pays en fonction d'une liste de nom de pays
// et ne récupérer que quelques caractéristiques dessus

var country_list = ['France', 'Germany', 'Ethiopia'];

var url_taux = "https://api.exchangeratesapi.io/latest";
var url_pays = "https://restcountries.eu/rest/v2/name/";


var result_pays;



for (i = 0; i < country_list.length; i++) {
  lien = url_pays + country_list[i];
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
          c1.innerText =result_pays[0].name;
          c3.innerText = result_pays[0].capital;
          c4.innerText = result_pays[0].region;
        })
    })

}





var resu_taux;
var resu_pays;
var url_taux = "https://api.exchangeratesapi.io/latest";

liste_pays = ["germany", "france"];

//console.log("Hi");





fetch(url_taux)
  .then(function(response) {
    response.json()
      .then(function(data) {
        resu_taux = data;
        //console.log(resu_taux.rates);
      })
  })
