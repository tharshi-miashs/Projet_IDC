// Récupérer les infomartions d'un pays en fonction d'une liste de devises
// et récupérer quelques caractéristiques sur le pays

var url_rate = "https://api.exchangeratesapi.io/latest?symbols";
var url_country = "https://restcountries.eu/rest/v2/all";

var result_rate; 
var currency;
var currencies = [];
currencies.push({ name: "EUR", rate: 1 });
var result_country;
var country;
var rate_country;
var balise_img_start = '<img src="';
var balise_img_end = '" id="flag">';


fetch(url_rate)
  .then(function (response) {
    response.json()
      .then(function (data) {
        result_rate = data;

        for (currency in result_rate.rates) {
          currencies.push({ name: currency, rate: result_rate.rates[currency] });
        }

        fetch(url_country)
          .then(function (response) {
            response.json()
              .then(function (data) {
                result_country = data;

                for (country in result_country) {
                  rate_country = result_country[country].currencies[0].code;

                  for (i in currencies) {

                    if (rate_country == currencies[i].name) {
                      var row = tableau.insertRow(1);
                      var c1 = row.insertCell(0);
                      var c2 = row.insertCell(1);
                      var c3 = row.insertCell(2);
                      var c4 = row.insertCell(3);
                      var c5 = row.insertCell(4);
                      var c6 = row.insertCell(5);
                      var c7 = row.insertCell(6);
                      c1.innerText = result_country[country].name;
                      c2.innerHTML = balise_img_start + result_country[country].flag + balise_img_end;
                      c3.innerText = result_country[country].capital;
                      c4.innerText = result_country[country].region;
                      c5.innerText = result_country[country].population;
                      c6.innerText = currencies[i].name;
                      c7.innerText = currencies[i].rate;
                    }
                  }
                }
              })
          })
      })
  });

// Afficher la date :
var the_date = document.getElementById('date');
var d = new Date();
var mm = d.getMonth() + 1;
var dd = d.getDate();
var yy = d.getFullYear();
var myDateString = yy + '-' + mm + '-' + dd;
the_date.innerText = myDateString;