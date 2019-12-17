// Récupérer les infomartions d'un pays en fonction d'une liste de devises
// et récupérer quelques caractéristiques sur le pays


// API utilisées :
let url_rate = "https://api.exchangeratesapi.io/latest?symbols";
let url_country = "https://restcountries.eu/rest/v2/all";

// Variables :
let result_rate;
let currency;
let currencies = []; // Tableau qui permettra de structurer les données de l'API url_rate
currencies.push({
    name: "EUR",
    rate: 1
}); // Devise de base du taux de change
let result_country;
let country;
let rate_country;
let tableau = document.getElementById("tbody"); // tableau contenant les pays et leurs informations
let balise_img_start = '<img src="'; // Permet d'enregistrer le tableau dans une balise
let balise_img_end = '" id="flag">'; // Permet d'enregistrer le tableau dans une balise

// Récupération date de mise à jour des devises
let the_date = document.getElementById('date');
fetch(url_rate)
    .then(function(response) {
        response.json()
            .then(function(data) {
                the_date.innerText = data.date;
            })
    })

// Récupération devises, pays associés et de leurs informations
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
                                        // Si c'est le cas, il remplit des informations sur le pays dans le tableau d'affichage
                                        // On s'assure d'abord que les attributs dans l'api ne soient pas vides
                                        if (rate_country == currencies[i].name) {
                                            if ((result_country[country].capital != "") &
                                                (result_country[country].region != "") &
                                                (result_country[country].population != "0") &
                                                (result_country[country].currencies[0].symbol != null)) {
                                                let row = tableau.insertRow();
                                                let c1 = row.insertCell(0);
                                                let c2 = row.insertCell(1);
                                                let c3 = row.insertCell(2);
                                                let c4 = row.insertCell(3);
                                                let c5 = row.insertCell(4);
                                                let c6 = row.insertCell(5);
                                                let c7 = row.insertCell(6);
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

// Fonction permetant de chercher un pays par son nom dans le tableau :
const Fonction_recherche = () => {
    let filter = document.getElementById('search').value.toUpperCase(); // Stocke en majuscules la recherche de l'utilisateur.
    let table = document.getElementById('tbody'); // Stocke le contenu de l'information récupérée dans la balise identifié par 'tbody', c.a.d le contenu du tableau des pays
    let tr = table.getElementsByTagName('tr'); // Permets d'identifier les lignes au sein de la table

    document.getElementsByClassName("title")[0].scrollIntoView(); // Permets de remonter en haut pour visualiser le(s) résultat(s)

    for (let i = 0; i < tr.length; i++) { // Parcourt toutes les lignes du tableau des pays
        let td = tr[i].getElementsByTagName('td')[0]; // Récupère le nom du pays a testé
        let name_country = td.textContent || td.innerHTML; // Sécurité permettant de "transformer" le nom du pays en texte 

        if (td) { // Sécurité pour éviter que td soit undefined
            if (name_country.toUpperCase().indexOf(filter) > -1) { // Si name_country (en majuscules) contient la recherche, on laisse la i-ème ligne visible
                tr[i].style.display = "";
            } else { // Sinon la i-ème ligne devient non visible
                tr[i].style.display = "none";
            }
        }
    }
}
