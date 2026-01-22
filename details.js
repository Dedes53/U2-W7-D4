document.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const imgId = params.get('id');
    const imgSrc = params.get('src');
    const imgAlt = params.get('alt');

    const detailImage = document.getElementById('detail-image');
    const detailImageAlt = document.getElementById('detail-image-alt');

    detailImage.src = imgSrc;
    detailImage.alt = imgAlt;
    detailImageAlt.textContent = `Image ID: ${imgId}`;
}

const url = location.search // tutto il contenuto della barra degli indirizzi
console.log('url', url)
const allTheParameters = new URLSearchParams(url) // un oggetto con dentro tutti i parametri
console.log('allTheParameters', allTheParameters)
const id = allTheParameters.get('id') // prendo il parametro id