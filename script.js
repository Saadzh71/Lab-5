


//This will create an img element and return it to caller
function createImgElement(photoURL){
    const imgElem = document.createElement('img');
    imgElem.src = photoURL;
    imgElem.alt = "photo of a cat. 🐈"
    return imgElem;
}

// This will delete given img element
function addDeleteButton(imgElem){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function(){
        imgElem.remove();
        deleteButton.remove();
    });
    const photoGallaryDiv = document.getElementById('photo-gallary');
    photoGallaryDiv.appendChild(deleteButton);
}

//This will add img element to the gallary (div element)
function addPhotoToGallaryDiv(imgElem){
    const photoGallaryDiv = document.getElementById('photo-gallary');
    photoGallaryDiv.appendChild(imgElem);
}

//This will handle the button click event for adding img
function addPhoto(){
    const photoURL = prompt("Enter the url of the photo:");
    const imgElem = createImgElement(photoURL);
    addPhotoToGallaryDiv(imgElem);
    addDeleteButton(imgElem);
}

const addPhotoBtn = document.getElementById("addPhotoBtn");
addPhotoBtn.addEventListener('click', addPhoto);