// ci colleghiamo all'api tramite la nostra key 7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36
const pexelsURL = 'https://api.pexels.com/v1/search?query=kittens';
const APIkey = "7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36";

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
    })
    .catch((err) => {
        console.error('Errore:', err);
        alert('Si è verificato un errore nel recupero delle immagini.');
    });

