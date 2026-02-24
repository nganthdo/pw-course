class Library {
    // declare property
    nameLib: string;
    location: string;
    books: { id: number; name: string }[] = [];
    // constructor
    constructor(nameLib: string, location: string) {
        this.nameLib = nameLib;
        this.location = location;
    }
    //method: addBook
    addBook(book: { id: number; name: string }) {
        this.books.push(book);
    }
    //method: findBook
    findBook(keyword: string) {
        const findResult = [];
        for (let key in this.books) {
            const item = this.books[key];
            if (item.name == keyword) {
                findResult.push(item);
               
            }
        }
        if (findResult.length > 0){
             console.log(findResult);
        } else {
            console.log("Item not found");
        }
    }
}
const myBook = new Library("LibraryA", "LocationA");
myBook.addBook({ id: 1, name: "bookA" });
myBook.addBook({ id: 2, name: "bookB" });
myBook.addBook({ id: 3, name: "bookB" });
myBook.addBook({ id: 4, name: "bookC" });
myBook.findBook("bookB");

