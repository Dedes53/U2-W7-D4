// ci colleghiamo all'api tramite la nostra key 7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36
const loadURL = 'https://api.pexels.com/v1/search?query=hamsters'; // immagini di hamsters
const secondaryURL = 'https://api.pexels.com/v1/search?query=tigers'; // immagini di tigers
const APIkey = "7MnXIBqablYv6DtTQYdoj61wgpzbwmKcp2OOiWqdwLJWo8rFHFUEFl36";

// numero di immagini da caricare
const nAlbum = 9;

const row = document.getElementById("row");

// tag dei pulsanti
const loadBTN = document.getElementById("load"); // deve far caricare immagini hamsters
const secondaryBTN = document.getElementById("secondary"); // deve far caricare immagini tigers

// riferimento alle immagini del DOM
const imgs = document.getElementsByTagName('img');

//riferimento ai tag per ID delle immagini
const imgIds = document.querySelectorAll('.img-id');



// FUNZIONE per inizializzare i pulsanti Hide
function initHideButtons() {
    const hideButtons = document.querySelectorAll('.hide');

    hideButtons.forEach(button => {
        // Rimuovi eventuali listener precedenti
        button.replaceWith(button.cloneNode(true));
    });

    // Riseleziona dopo il clone
    document.querySelectorAll('.hide').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const img = card.querySelector('img');
            const paragraph = card.querySelector('.card-text');

            if (img.style.display === 'none') {
                img.style.display = 'block';
                paragraph.style.display = 'block';
                this.textContent = 'Hide';
                this.classList.remove('text-success');
                this.classList.add('text-danger');
            } else {
                img.style.display = 'none';
                paragraph.style.display = 'none';
                this.textContent = 'Show';
                this.classList.remove('text-danger');
                this.classList.add('text-success');
            }
        });
    });
}


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
            row.innerHTML = ''; // pulisco le immagini precedenti
            for (let i = 0; i < nAlbum; i++) {
                row.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src=${data.photos[i].src.medium} class="bd-placeholder-img card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Photo ${i}</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="hide btn btn-sm btn-outline-secondary text-danger">
                                Hide
                                </button>
                            </div>
                            <small class="text-muted img-id">ID: ${data.photos[i].id}</small>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            // aggiorno la lista dei pulsanti "Hide" dopo aver aggiunto le nuove immagini
            initHideButtons();
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
            console.log(data);
            row.innerHTML = ''; // pulisco le immagini precedenti
            for (let i = 0; i < nAlbum; i++) {
                row.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src=${data.photos[i].src.medium} class="bd-placeholder-img card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Photo ${i}</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="hide btn btn-sm btn-outline-secondary text-danger">
                                Hide
                                </button>
                            </div>
                            <small class="text-muted img-id">ID: ${data.photos[i].id}</small>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            // aggiorno la lista dei pulsanti "Hide" dopo aver aggiunto le nuove immagini
            initHideButtons();
        })
        .catch((err) => {
            console.log('Errore:', err);
            alert('Si è verificato un errore nel recupero delle immagini.');
        })
})


