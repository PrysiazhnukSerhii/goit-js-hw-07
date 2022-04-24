import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryTotal = document.querySelector(".gallery");

let valueLigthBox;

galleryTotal.insertAdjacentHTML('beforeend', createGallery(galleryItems));


galleryTotal.addEventListener("click", showModalPicture);



function createGallery(arrey) {
   return arrey.map((value) => {
        return `
        <div class="gallery__item">
           <a class="gallery__link" href="large-image.jpg"  onclick="return false;">
                <img
                  class="gallery__image"
                  src="${value.preview}"
                  data-source="large-image.jpg"
                  alt="${value.description}"
                 />
           </a>
        </div>`
    }).join("")
}


function showModalPicture(event) {
    if (!event.target.classList.contains("gallery__image")) { return };
    
    window.addEventListener("keydown", closeModalEsc);
    
    findBigPIcture(event.target.alt);

    
}


function findBigPIcture(element) {
    
    galleryItems.map((e) => {

        if (element === e.description) {
            valueLigthBox = basicLightbox.create(`<img src="${e.original}" width="800" height="600"></img>`);

            return valueLigthBox.show()
        }
    })

}



function closeModalEsc(event) {
    if (event.code === "Escape") {

        window.removeEventListener("keydown", closeModalEsc);

        return valueLigthBox.close();
    }
 
}





