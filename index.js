// Récupérer les infomartions d'un pays en fonction d'une liste de devises
// et récupérer quelques caractéristiques sur le pays


// API utilisées :
var url_rate = "https://api.exchangeratesapi.io/latest?symbols";
var url_country = "https://restcountries.eu/rest/v2/all";

// Variables :
var result_rate;
var currency;
var currencies = []; // Tableau qui permettra de structurer les données de l'API url_rate
currencies.push({
  name: "EUR",
  rate: 1
}); // Devise de base du taux de change
var result_country;
var country;
var rate_country;
var balise_img_start = '<img src="'; // Permet de restreindre la taille du drapeau
var balise_img_end = '" id="flag">'; // Permet de restreindre la taille du drapeau


fetch(url_rate)
  .then(function(response) {
    response.json()
      .then(function(data) {
        result_rate = data; // Stocke le résultat de l'API url_rate dans la variable result_rate

        // Structure le résultat dans le tableau currencies
        for (currency in result_rate.rates) {
          currencies.push({
            name: currency,
            rate: result_rate.rates[currency]
          });
        }

        fetch(url_country)
          .then(function(response) {
            response.json()
              .then(function(data) {
                result_country = data; // Stocke le résultat de l'API url_country dans la variable result_country

                // Parcourt tous les pays présents dans result_country
                for (country in result_country) {
                  rate_country = result_country[country].currencies[0].code; // Stocke la devise associée au pays dans la variable rate_country

                  // Parcourt le tableau currencies
                  for (i in currencies) {

                    // On regarde si le taux de change de la devise du pays est stocké dans le tableau currencies
                    // Si c'est le cas, il remplit des informations sur le pays dans le tableau row
                    // On s'assure d'abord que les attributs dans l'api ne soient pas vides
                    if ((result_country[country].capital != "") & (result_country[country].region != "")) {
                      if (rate_country == currencies[i].name) {
                        var row = tableau.insertRow(1);
                        var c1 = row.insertCell(0);
                        var c2 = row.insertCell(1);
                        var c3 = row.insertCell(2);
                        var c4 = row.insertCell(3);
                        var c5 = row.insertCell(4);
                        var c6 = row.insertCell(5);
                        var c7 = row.insertCell(6);
                        c1.innerText = result_country[country].name; // Renseigne le nom du pays
                        c2.innerHTML = balise_img_start + result_country[country].flag + balise_img_end; // Renseigne le drapeau du pays
                        c3.innerText = result_country[country].capital; // Renseigne la capitale du pays
                        c4.innerText = result_country[country].region; // Renseigne le continent sur lequel se situe le pays
                        c5.innerText = result_country[country].population; // Renseigne le nombre d'habitants du pays
                        c6.innerText = currencies[i].name; // Renseigne le nom de la devise utilisée dans le pays
                        c7.innerText = currencies[i].rate + " " + result_country[country].currencies[0].symbol; // Renseigne la valeur d'un euro dans la devise du pays précisée par le symbole associé
                      }
                    }
                  }
                }
              })
          })
      })
  });

// Affiche la date :
var the_date = document.getElementById('date');
var d = new Date();
var mm = d.getMonth() + 1;
var dd = d.getDate();
var yy = d.getFullYear();
var myDateString = yy + '-' + mm + '-' + dd;
the_date.innerText = myDateString;


const Fonction_recherche = () => {
  let filter = document.getElementById('Entree').value.toUpperCase();
  let maTable = document.getElementById('tableau');
  let tr = maTable.getElementsByTagName('tr');

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td')[0];

    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
