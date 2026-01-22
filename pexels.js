// ci colleghiamo all'api tramite la nostra key 7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36
const pexelsURL = 'https://api.pexels.com/v1/search?query=fish';
const APIkey = "7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36";

const imgs = document.getElementsByTagName('img');

fetch(pexelsURL, {
    headers: {
        'Authorization': APIkey
    }
})
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            throw new Error('Errore recupero immagini da Pexels');
        }
    })
    .then((data) => {
        console.log(data);
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = data.photos[i].src.medium;
        }
    })
    .catch((err) => {
        console.error('Errore:', err);
        alert('Si è verificato un errore nel recupero delle immagini.');
    });

