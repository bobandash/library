
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
    const allBooksContainer = document.getElementById('all-books-container');
    createNewBook();
    displayBook(allBooksContainer, myLibrary.length - 1);
}

function createNewBook() {
    let bookName = document.getElementById('book-name').value;
    let authorName = document.getElementById('author-name').value;
    let numPages = document.getElementById('num-pages').value;
    let bookRead = document.getElementById("book-read").value;
    let newBook =  new Book(bookName, authorName, numPages, bookRead);
    myLibrary.push(newBook);
}

function displayBook(allBooksContainer, index) {

    let bookContainer = document.createElement('div');
    allBooksContainer.appendChild(bookContainer);
    bookContainer.classList.add('books-container');

    addCategoryTextAndValues(bookContainer, index);
    addButtons(bookContainer, index);
}


function addCategoryTextAndValues(bookContainer, index) {
    const numCategories = 4;

    let textCategory = document.createElement('div');
    bookContainer.appendChild(textCategory);
    textCategory.classList.add('text-category');

    let textContent = document.createElement('div');
    bookContainer.appendChild(textContent);
    textContent.classList.add('text-content');
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
}

function addButtons(bookContainer, index) {
    const numButtons = 3;
    let btnsContent = document.createElement('div');
    bookContainer.appendChild(btnsContent);
    btnsContent.classList.add('buttons-content');
    for(let i = 0; i < numButtons; i++) {
        let currButton = document.createElement('button');
        let currIcon = document.createElement('i');
        btnsContent.appendChild(currButton);
        currButton.appendChild(currIcon);
        currIcon.classList.add('fa-solid');
        switch (i) {
            case 0:
                currButton.classList.add('delete-btn');
                currIcon.classList.add('fa-trash');
/*                  currButton.addEventListener('click', removeBook(index)); */
                break;
            case 1:
                currButton.classList.add('edit-btn');
                currIcon.classList.add('fa-pen');
                break;
            case 2:
                currButton.classList.add('toggle-read-btn');
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

function removeBook(index) {
    myLibrary.splice(index,1);
    clearDisplay();
    displayAllBooks();
}

function clearDisplay() {
    let allBooksContainer = document.getElementById('all-books-container');
    let allBooks = Array.from(document.querySelectorAll('.books-container'));
    for(let i = 0; i < allBooks.length; i++)
    {
        allBooksContainer.removeChild(allBooks[i]);
    }
}

//the form's default reaction is to refresh the page,
//this prevents the form from refreshing the page
let form = document.getElementById("add-book-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//form functionality
formSubmitBtn.addEventListener('click', function() {
    addBookToLibrary();
    modalContainer.classList.remove('show');
})

addBookBtn.addEventListener('click', function () {
    modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('show');
});


//main function
displayAllBooks();
//the issue is that the form is editing the url