
// for form
const addBookBtn = document.getElementById('add-book-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-button');
const formSubmitBtn = document.getElementById('form-submit-btn');

let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
    createNewBook();
}

function createNewBook() {
    const allBooksContainer = document.getElementById('all-books-container');
    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const numPages = document.getElementById('num-pages').value;
    const bookRead = document.getElementById("book-read").value;
    let newBook =  Book(bookName, authorName, numPages, bookRead);
    myLibrary.push(newBook);
    displayBook(allBooksContainer, myLibrary.length - 1)
}

function displayBook(allBooksContainer, index) {
    const numCategories = 4;
    const numButtons = 3;

    let bookContainer = document.createElement('div');
    let textCategory = document.createElement('div');
    let textContent = document.createElement('div');
    let btnsContent = document.createElement('div');

    allBooksContainer.appendChild(bookContainer);
    bookContainer.appendChild(textCategory);
    bookContainer.appendChild(textContent);
    bookContainer.appendChild(btnsContent);

    bookContainer.classList.add('books-container');
    textCategory.classList.add('text-category');
    textContent.classList.add('text-content');
    btnsContent.classList.add('buttons-content');

    for(let i = 0; i < numCategories; i++) {
        let categoryName = document.createElement('div');
        let categoryValue = document.createElement('div');
        textCategory.appendChild(categoryName);
        textContent.appendChild(categoryValue);
        switch (i) {
            case 0:
                categoryName.innerText = 'Title';
                categoryValue.innerText = myLibrary[index].title;
                break;
            case 1:
                categoryName.innerText = 'Author';
                categoryValue.innerText = myLibrary[index].author;
                break;
            case 2:
                categoryName.innerText = 'Pages';
                categoryValue.innerText = myLibrary[index].numPages;
                break;
            case 3:
                categoryName.innerText = 'Read';
                categoryValue.innerText = myLibrary[index].read;
                break;
            case 4:
                categoryName.innerText = 'Review';
                break;
        }
    }

    for(let i = 0; i < numButtons; i++) {
        let currButton = document.createElement('div');
        let currIcon = document.createElement('i');
        btnsContent.appendChild(currButton);
        currButton.appendChild(currIcon);
        currIcon.classList.add('fa-solid');
        switch (i) {
            case 0:
                currIcon.classList.add('fa-trash');
                break;
            case 1:
                currIcon.classList.add('fa-pen');
                break;
            case 2:
                currIcon.classList.add('fa-book');
                break;
        }
    }

}

function displayAllBooks() {
    const allBooksContainer = document.getElementById('all-books-container');
    for(let i = 0; i < myLibrary.length; i++){
        displayBook(allBooksContainer, i);
    }
}


/* formSubmitBtn.addEventListener('click', addBookToLibrary) */

addBookBtn.addEventListener('click', function () {
    modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('show');
});



//main function
displayAllBooks();