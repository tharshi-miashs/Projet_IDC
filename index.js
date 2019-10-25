//Récupérer les infomartions d'un pays en fonction d'une liste de nom de pays
// et ne récupérer que quelques caractéristiques dessus

var liste_pays = [
    {
      "devise": "EUR",
          "pays": ["Spain"]
    },
    {
      "devise": "AUD",
      "pays": ["Australia"]
    },
    {
      "devise": "BGN",
      "pays": ["Bulgaria"]
    },
    {
          "devise": "BRL",
          "pays": ["Brazil"]
    },
    {
          "devise": "CAD",
          "pays": ["Canada"]
      },
    {
          "devise": "CHF",
          "pays": ["Switzerland"]
      },
    {
          "devise": "CNY",
          "pays" : ["China"]
      },
    {
          "devise": "CZK",
          "pays": ["Czech Republic"]
      },
    {
          "devise": "DKK",
          "pays": ["Denmark"]
      },
    {
          "devise": "GBP",
          "pays": [" United Kingdom"]
      },
    {
          "devise": "HKD",
          "pays": ["Hong Kong"]
      },
    {
          "devise": "HUF",
          "pays": ["Hungary"]
      },
    {
          "devise": "IDR",
          "pays": ["Indonesia"]
      },
      {
          "devise": "ILS",
          "pays": ["Israel"]
      },
      {
          "devise": "INR",
          "pays": ["India"]
      },
      {
          "devise": "ISK",
          "pays": ["Iceland"]
      },
    {
          "devise": "JPY",
          "pays": ["Japan"]
      },
      {
          "devise": "KRW",
          "pays": ["Korea"]
      },
      {
          "devise": "MXN",
          "pays": ["Mexico"]
      },
      {
          "devise": "MYR",
          "pays": ["Malaysia"]
      },
      {
          "devise": "NOK",
          "pays": ["Norway"]
      },
      {
          "devise": "NZD",
          "pays": ["New Zealand"]
      },
      {
          "devise": "PHP",
          "pays": ["Philippines"]
      },
      {
          "devise": "PLN",
          "pays": ["Poland"]
      },
      {
          "devise": "RON",
          "pays": ["Romania"]
      },
      {
          "devise": "RUB",
          "pays": ["Russia"]
      },
      {
          "devise": "SEK",
          "pays": ["Sweden"]
      },
      {
          "devise": "SGD",
          "pays": ["Singapore"]
      },
      {
          "devise": "THB",
          "pays": ["Thailand"]
      },
      {
          "devise": "TRY",
          "pays": ["Turkey"]
      },
      {
          "devise": "USD",
          "pays": ["American Samoa"]
      },
      {
          "devise": "ZAR",
          "pays": ["South Africa"]
      }
  ];

var country_list = ['France', 'Germany', 'Ethiopia'];
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
          c1.innerText =result_pays[0].name;
          c3.innerText = result_pays[0].capital;
          c4.innerText = result_pays[0].region;
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
