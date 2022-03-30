let myLibrary = [];
let newBookButton = document.querySelector('#add-button');
let container = document.querySelector('#books-container');


{/*        <header id = "header-container">
            <h1 id = "header-text">The Forbidden Library</h1>
        </header>
        <div id = "books-container"></div>
        <footer id = "add-button-footer">
            <button id = "add-button">Insert a Book</button>
        </footer>
    </body>

</html> */}


//book constructor
function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    function info(){
        if(read == true)
        {
            return `${title} by ${author},${pages}, read`            
        }
        return `${title} by ${author},${pages}, not read yet`
    }
}


Book.prototype.toggleRead = function()
{
    if (this.read ? this.read = false : this.read = true);
}

//when the new button is pressed, add book to array and display it
newBookButton.addEventListener('click', function () {
    addBookToLibrary();
})

//add book to array
function addBookToLibrary() {
    let title = prompt('Title of the Book');
    let author = prompt('Author of the book');
    let pages = prompt('Number of pages');
    while(!isNumber(pages))
    {
        pages = prompt('Please enter the number of pages as a number');
    }
    let read = prompt('Finished Reading?: Enter True or False');
    if(read == 'True' ? read = true : read = false);
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
}

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }


function display(){
    //need to clear the display
    let allBooksDisplayed = document.querySelectorAll('.new-book');
    for(let i = allBooksDisplayed.length -1; i >= 0; i--)
    {
        allBooksDisplayed[i].remove();
    }

    //place all new and old books
    for(let i = 0; i < myLibrary.length; i++)
    {
        var currentBook = myLibrary[i];
        var newDiv = document.createElement('div');
        newDiv.className = "new-book";

        //add the card with the book
        newDiv.textContent = `${currentBook.title} \r\n`
        newDiv.textContent += `By: ${currentBook.author} \r\n`
        newDiv.textContent += `Pages: ${currentBook.pages} \r\n`        
        if(currentBook.read ? newDiv.textContent += `Read: Yes \r\n` : newDiv.textContent += `Read: No \r\n`)

        //add a container div for the buttons
        var containerButtonsDiv = document.createElement('div');
        containerButtonsDiv.className = 'button-container';
        containerButtonsDiv.id = i;

        //add the remove button
        var removeButton = document.createElement('button');
        removeButton.className = 'remove-button'; 
        removeButton.id = i;
        removeButton.textContent = 'X';

        //add the toggle button
        var toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-button';
        toggleButton.textContent = 'Read';

        container.appendChild(newDiv);
        newDiv.appendChild(containerButtonsDiv);
        containerButtonsDiv.appendChild(toggleButton);
        containerButtonsDiv.appendChild(removeButton);
    }

    addRemoveButtonFunctionality();
    addToggleFunctionality();
}

function addRemoveButtonFunctionality()
{
    let removeBookButtons = document.querySelectorAll('.remove-button');
    for(let i = 0; i < removeBookButtons.length; i++)
    {
        removeBookButtons[i].addEventListener('click', function(){
            myLibrary.splice(removeBookButtons[i].parentNode.id,1);
            display();
        })
    }
}

function addToggleFunctionality()
{
    let toggleButtons = document.querySelectorAll('.toggle-button');
    for(let i = 0; i < toggleButtons.length; i++)
    {
        toggleButtons[i].addEventListener('click', function(){
            myLibrary[toggleButtons[i].parentNode.id].toggleRead();
            display();
        })
    }    

}
