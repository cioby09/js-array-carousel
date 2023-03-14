// Creo l'array contenente le immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

const itemsContainer = document.querySelector(".slider-items")
console.log(itemsContainer);

// Creo il ciclo che mi permette di creare un div per ogni immagine dell'array
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;
        console.log(sliderItem)

        // Inserisco gli elementi creati nel container "slider-items"
        itemsContainer.innerHTML += sliderItem;
}

const itemsArray = document.getElementsByClassName("item");

//Fisso la prima immagine
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");