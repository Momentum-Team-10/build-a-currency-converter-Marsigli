const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const root = document.getElementById('root')
const container = document.createElement('div')
container.id = 'container'
root.appendChild(container)

let dropdownLabel = document.createElement('label')
dropdownLabel.innerText = "Currency"
container.appendChild(dropdownLabel)

const dropdown = document.createElement('select')
container.appendChild(dropdown)

for (currency of currencies) {
    const option = document.createElement('option')
    option.innerText = currency
    dropdown.appendChild(option)
}

let button = document.createElement('button')
    button.innerText = 'Convert'
    container.appendChild(button)

fetch('https://openexchangerates.org/api/latest.json?app_id=a9b781341db4434b8d8c5689f3142f35')
    // The first promise is to get the reponse
    .then(response => response.json())
    // The second promise is to use the data from the response
    .then(data =>  {
        
        // Inside of this second promise is where we
        // can start doing things with the data from the api

















