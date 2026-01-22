const url = location.search // tutto il contenuto della barra degli indirizzi
console.log('url', url)
const allTheParameters = new URLSearchParams(url) // un oggetto con dentro tutti i parametri
console.log('allTheParameters', allTheParameters)
const id = allTheParameters.get('id') // prendo il parametro id