// ci colleghiamo all'api tramite la nostra key 7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36
const loadURL = 'https://api.pexels.com/v1/search?query=hamsters'; // immagini di hamsters
const secondaryURL = 'https://api.pexels.com/v1/search?query=tigers'; // immagini di tigers
const APIkey = "7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36";


// tag dei pulsanti
const loadBTN = document.getElementById("load"); // deve far caricare immagini hamsters
const secondaryBTN = document.getElementById("secondary"); // deve far caricare immagini tigers

// riferimento alle immagini del DOM
const imgs = document.getElementsByTagName('img');

// hamsters function
loadBTN.addEventListener("click", function () {
    fetch(loadURL, {
        headers: {
            'Authorization': APIkey
        }
    })
        .then((res) => {
            if (res.ok) { return res.json(); }
            else { throw new Error('Errore recupero immagini da Pexels'); }
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

})

// tigers function
secondaryBTN.addEventListener("click", function () {
    fetch(secondaryURL, {
        headers: {
            "Authorization": APIkey
        }
    })
        .then((res) => {
            if (res.ok) { return res.json(); }
            else { throw new Error("Errore recupero immagini da Pexels"); }
        })
        .then((data) => {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].src = data.photos[i].src.medium;
            }
        })
        .catch((err) => {
            console.log('Errore:', err);
            alert('Si è verificato un errore nel recupero delle immagini.');
        })
})



// Seleziona tutti i pulsanti "Hide"
const hideButtons = document.querySelectorAll('.hide');

// funzione che nasconde la relativa carta quando si clocca sul pulsante hide 
hideButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');
        const img = card.querySelector('img');
        const paragraph = card.querySelector('.card-text');

        if (img.style.display === 'none') {
            img.style.display = 'block';
            paragraph.style.display = 'block';
            this.textContent = 'Hide';
            this.classList.remove('text-success');
            this.classList.add('text-danger'); // Rosso (già presente nell'HTML)
        } else {
            img.style.display = 'none';
            paragraph.style.display = 'none';
            this.textContent = 'Show';
            this.classList.remove('text-danger');
            this.classList.add('text-success'); // Verde
        }
    });
});