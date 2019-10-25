//Récupérer les infomartions d'un pays en fonction d'une liste de nom de pays
// et ne récupérer que quelques caractéristiques dessus

var liste_pays = [ "Åland Islands","Andorra","Austria","Belgium","Estonia","Finland","France","French Guiana","French Southern Territories","Germany",
                  "Spain","Greece","Guadeloupe","Holy See","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Martinique","Mayotte",
                  "Monaco","South Georgia","South Sandwich Islands","British Indian Ocean Territory","American Samoa","Turkey",
                  "Montenegro","Netherlands","Portugal","Republic of Kosovo","Réunion","Saint Barthélemy","Saint Martin (French part)",
                  "Saint Pierre and Miquelon","San Marino","Slovakia","Slovenia","Antarctica","Australia","Christmas Island","Heard Island",
                  "Kiribati","Nauru","Norfolk Island","Tuvalu","Bulgaria","Brazil","Canada","Switzerland","Liechtenstein",
                  "China","Czech Republic","Denmark","Faroe Islands","Greenland","United Kingdom","Guernsey","Isle of Man","Jersey",
                  "Great Britain","Northern Ireland","Hong Kong","Hungary","Indonesia","Israel","Palestine","India","Cook Islands",
                  "Iceland","Japan","Korea (Republic of)","Mexico","Malaysia","Norway","New Zealand","Niue","Pitcairn","Tokelau",
                  "Philippines","Poland","Romania","Russia","Sweden","Thailand","South Africa","American Samoa","Bonaire, Sint Eustatius and Saba",
                  "Ecuador","El Salvador","Guam","Marshall Islands","Northern Mariana Islands",
                  "British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (U.S.)",
                  "Puerto Rico","Timor-Leste","Turks and Caicos Islands","United States of America"
                  ];


var url_taux = "https://api.exchangeratesapi.io/latest?symbols=";
var url_pays = "https://restcountries.eu/rest/v2/name/";

var result_pays;
var resu_taux;

var balise_img_start = '<img src="';
var balise_img_end = '" id="flag">';



for (i = 0; i < liste_pays.length; i++) {
  lien = url_pays + liste_pays[i];
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
          var c7 = row.insertCell(6);
          var devise = result_pays[0].currencies[0].code;
          c1.innerText = result_pays[0].name;
          c2.innerHTML = balise_img_start + result_pays[0].flag + balise_img_end;
          c3.innerText = result_pays[0].capital;
          c4.innerText = result_pays[0].region;
          c5.innerText = result_pays[0].population;
          c6.innerText = devise;
          fetchTaux(c7, devise);
        })
    })

}

function fetchTaux(c, devise) {
  if (devise == "EUR") {
    c.innerText = 1;
  }else{
    fetch(url_taux + devise)
      .then(function(response) {
        response.json()
          .then(function(data) {
            c.innerText = data.rates[devise];
          })
      })
  }
}

var the_date = document.getElementById('date');
var d = new Date();
var mm = d.getMonth() + 1;
var dd = d.getDate();
var yy = d.getFullYear();
var myDateString = yy + '-' + mm + '-' + dd;
the_date.innerText = myDateString;