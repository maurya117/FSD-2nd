//Write a JavaScript program that calculates and displays the average
//  price of all books.

const books = [
  { title: 'Let us C', price: 499, author: 'Y.Kanetkar' },
  { title: 'Java Programming', price: 699, author: 'James Gosling' },
  { title: 'Python', price: 799, author: 'Guido Von Rossum' },
  { title: 'Let us C++', price: 849, author: 'Bjarne Stroustrup' },
  { title: 'JavaScript', price: 1499, author: 'Brendan Eich' }
];

const total = books.reduce((acc, book) => acc + book.price, 0);
const averagePrice = total / books.length;

console.log('Average Price:', averagePrice);