let myLibrary = [];
const gallery = document.querySelector(".booksGallery");
const addBookBtn = document.querySelector(".AddBook");
addBookBtn.addEventListener("click", addBook);
const newBook = document.querySelector(".newBook");
newBook.addEventListener("click", addNewBook);
const form = document.querySelector(".form");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addNewBook() {
  form.style.display = "block";
}

function addBook(e) {
  e.preventDefault();

  const input = form.querySelectorAll('input[type="text"]');
  const author = input[0].value;
  const title = input[1].value;
  const pages = input[2].value;
  const reading = document.querySelectorAll('input[type="radio"]');
  const read = reading[0].checked;
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
  form.style.display = "none";

  displayBooks();
}

function removeBook(id) {
  myLibrary = myLibrary.filter((book) => book.id != id);
  displayBooks();
}

Book.prototype.readToggle = function () {
  this.read = !this.read;
};

function displayBooks() {
  gallery.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement("p");
    read.textContent = `Read?: ${book.read ? "Yes" : "No"}`;

    const infoCont = document.createElement("div");
    infoCont.classList.add("infoCont");

    const btnCont = document.createElement("div");
    btnCont.classList.add("btnCont");

    const rmvBtn = document.createElement("button");
    rmvBtn.textContent = "remove book";
    rmvBtn.classList.add("BTN");
    rmvBtn.addEventListener("click", (e) => removeBook(book.id));

    const toggle = document.createElement("button");
    toggle.textContent = `${book.read ? "Mark as unread" : "Mark as read"}`;
    toggle.classList.add("BTN");
    toggle.classList.add("toggle");
    toggle.addEventListener("click", (e) => {
      book.readToggle();
      displayBooks();
    });

    infoCont.appendChild(author);
    infoCont.appendChild(title);
    infoCont.appendChild(pages);
    infoCont.appendChild(read);
    btnCont.appendChild(rmvBtn);
    btnCont.appendChild(toggle);
    card.appendChild(btnCont);
    card.appendChild(infoCont);
    gallery.appendChild(card);
  });
}
