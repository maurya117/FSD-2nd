//Write a JavaScript program that calculates the total price of all books 
// written by Brendan Eich.

const books = [
  { title: 'Let us C', price: 499, author: 'Y.Kanetkar' },
  { title: 'Java Programming', price: 699, author: 'James Gosling' },
  { title: 'Python', price: 799, author: 'Guido Von Rossum' },
  { title: 'Let us C++', price: 849, author: 'Bjarne Stroustrup' },
  { title: 'JavaScript', price: 1499, author: 'Brendan Eich' }
];

const totalBrendanEichPrice = books
  .filter(book => book.author === 'Brendan Eich')
  .reduce((acc, book) => acc + book.price, 0);

console.log('Total Price for Brendan Eich books:', totalBrendanEichPrice);