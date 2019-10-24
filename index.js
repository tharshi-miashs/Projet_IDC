var resu_taux;
var resu_pays;
var url_taux = "https://api.exchangeratesapi.io/latest";
var url_pays = "https://restcountries.eu/rest/v2/name/";

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



//var nom = document.getElementById("capital").innerText;
var lien = null;

//console.log(nom);

var tableau = document.getElementById("tableau");
console.log("tableau", tableau);




  for(i=0; i<liste_pays.length;i++){
    fetch(url_pays + liste_pays[i])
      .then(function(response) {
        response.json()
          .then(function(data) {
            resu_pays = data;
            var row = tableau.insertRow(1);
            var c1 = row.insertCell(0);
            var c2 = row.insertCell(1);
            var c3 = row.insertCell(2);
            var c4 = row.insertCell(3);
            var c5 = row.insertCell(4);
            var c6 = row.insertCell(5);
            c1.innerText =resu_pays[0].name;
          })
      })
  }




  //console.log(resu_pays);
//  console.log(resu_pays[0].name);
  //console.log(nom);
//  document.getElementById("pays").innerText = resu_pays[0].name;
