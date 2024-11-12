class Library{
    constructor(name, books) {
        this._name = name;
        this._books = books;
    }

    booksCollection = [];

    addBook(book) {
        this.booksCollection.push(book);
        console.log(`Book ${book} added to ${this._name}`);
    }

    removeBook(book) {
        if (!this.booksCollection.includes(book)) {
            console.log(`Book ${book} does not exist in ${this._name}`);
        }
        else {
            const bookIndex = this.booksCollection.findIndex(book => book === book);
            if (bookIndex !== -1) {
                this.booksCollection.splice(bookIndex, 1);
                console.log(`Book ${book} removed from ${this._name}`);
            }
        }
    }

    displayBooks() {
        console.log(`Books in ${this._name}`);
        if (this.booksCollection.length < 1) {
            console.log("No books available.");
        }
        else {
            this.booksCollection.forEach((book, index) => {
                console.log(`${index + 1}. ${book}`);
            })
        }
    }
}

const library = new Library("JS library");
library.displayBooks();
library.addBook("Javascript: The Definitive Guide - David Flanagan");
library.addBook("You don't know JS - Kyle Simpson");
library.addBook("Eloquest JavaScript, 4th Edition - Marjin Haverberke");
library.displayBooks();
library.removeBook("Javascript: The Definitive Guide - David Flanagan");
library.displayBooks();