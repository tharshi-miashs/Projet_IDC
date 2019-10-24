var result_monney;
var result_pays;
var url_monney = "https://api.exchangeratesapi.io/latest";
var url_pays = "https://restcountries.eu/rest/v2/all";



fetch(url_monney)
  .then(function(response) {
    response.json()
      .then(function(data) {
        result_monney = data;
        console.log(result_monney);

      })
})

fetch(url_pays)
  .then(function(response) {
    response.json()
      .then(function(data) {
        result_pays = data;
        console.log(result_pays);

      })
  })

  [	
    {
      "devise": "EUR",    
          "pays": ["Austria", "Belgium", "Cyprus", "Estonia", "Finland", "France", "Germany", "Greece", "Ireland",
                  "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Portugal", "Slovakia",
                  "Slovenia", "Spain"]
    },
    {
      "devise": "AUD",    
      "pays": ["Australia", "Kiribati", "Nauru", "Tuvalu", "Norfolk Island", "Christmas Island", "Keeling"]
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
          "pays": ["Switzerland", "Liechtenstein"]
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
          "pays": ["Denmark", "Faroe Islands", "Greenland"]
      },
    {
          "devise": "GBP",
          "pays": [" United Kingdom","Great Britain", "Gibraltar", "Northern Ireland", "Isle of Man",
                  "Jersey", "Guernsey", "South Georgia", "South Sandwich Islands", "British Indian Ocean Territory", "Saint Helena"]
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
          "pays": ["Israel", "Palestine"]
      },
      {
          "devise": "INR",
          "pays": ["India", "Bhutan"]
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
          "pays": ["New Zealand", "Cook Islands", "Niue", "Pitcairn", "Tokelau"]
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
          "pays": ["American Samoa", "Bonaire", "Sint Eustatius", "Saba", "United States Minor Outlying Islands",
                    "Virgin Islands", "Cambodia", "Ecuador", "El Salvador", "Guam", "Marshall Islands", "Micronesia ", "Northern Mariana Islands",
                    "Palau", "Panama", "Puerto Rico","Timor-Leste","Turks", "Caicos Islands", "United States of America", "Zimbabwe"]
      },
      {
          "devise": "ZAR",
          "pays": ["South Africa", "Namibia", "Lesotho", "Eswatini"]
      }
  ]