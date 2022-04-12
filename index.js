let myLibrary = [];

function Book(author, title, numPages, read, review) {

}

function addBookToLibrary() {

}

const addBookBtn = document.getElementById('add-book-btn');
const modalContainer = document.getElementById('modal-container')
const closeBtn = document.getElementById('close-button');


addBookBtn.addEventListener('click', function () {
    modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('show');
});
