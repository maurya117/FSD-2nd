//Write a JavaScript program that extracts the title of books that are 
// considered expensive (price > 800).

const books = [
  { title: 'Let us C', price: 499, author: 'Y.Kanetkar' },
  { title: 'Java Programming', price: 699, author: 'James Gosling' },
  { title: 'Python', price: 799, author: 'Guido Von Rossum' },
  { title: 'Let us C++', price: 849, author: 'Bjarne Stroustrup' },
  { title: 'JavaScript', price: 1499, author: 'Brendan Eich' }
];

const expensiveTitles = books
  .filter(book => book.price > 800)
  .map(book => book.title);

console.log(expensiveTitles);