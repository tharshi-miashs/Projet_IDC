//Récupérer les infomartions d'un pays en fonction d'une liste de nom de pays et ne récupérer que quelques caractéristiques dessus

var country_list = ['France', 'Germany', 'Ethiopia'];

var url_one_pays = "restcountries.eu/rest/v2/name/";
var pays = country_list[0];
var url_one_pays + pays;
var result_pays;
var url_pays = url_one_pays + pays;
console.log(url_pays);


for (i = 0; i < country_list.length; i++) {
  lien = url_pays + country_list[i];
  fetch(lien)
    .then(function(response) {
      response.json()
        .then(function(data) {
          result_pays = data;
          //console.log(resu_pays);
          console.log(result_pays[0]);
          var name = result_pays[0].name;
          var capitale = result_pays[0].capital;
          var region = result_pays[0].region;
          console.log("Voici le nom : " + name);
          console.log("Sa capitale est : " + capitale);
          console.log("Continent : " + region);

          //console.log(nom);
          //nom.innerText = resu_pays[0].name;
        })
    })

}