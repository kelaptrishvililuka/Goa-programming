// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    bookList() {
        console.log("Books in library:", this.books);
    }
}

const myLibrary = new Library();

myLibrary.addBook("Harry Potter");
myLibrary.addBook("The Hobbit");
myLibrary.addBook("1984");

myLibrary.bookList();