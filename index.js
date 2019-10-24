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
          "pays": ["South Africa]
      }
  ]