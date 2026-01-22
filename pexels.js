// 7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36

const pexelsURL = 'https://www.pexels.com/api/';
fetch(pexelsURL, {
    headers: {
        'Authorization': '7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36'
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
        data.photos.forEach(photo => {
            // const img = document.createElement('img');
            // img.src = photo.src.medium;
            // document.body.appendChild(img);
        });
    })
    .catch((error) => {
        console.error('Errore:', error);
    });