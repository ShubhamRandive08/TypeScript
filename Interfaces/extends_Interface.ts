// Write the program to make the extended interface

interface Book {
    name : string;
    price : number
}

interface EBook extends Book {
    fileSize : number;
    format : string;
}

interface AudioBook extends EBook {
    duration : number;
}

const book : AudioBook = {
    name : 'Automic Habits',
    price : 1200,
    fileSize : 300,
    format : 'pdf',
    duration : 4
}

console.log(book.name)