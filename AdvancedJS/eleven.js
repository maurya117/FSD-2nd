// write a JavaScript program that counts how many books are written by each author.

const books = [
  { title: 'Let us C', price: 499, author: 'Y.Kanetkar' },
  { title: 'Java Programming', price: 699, author: 'James Gosling' },
  { title: 'Python', price: 799, author: 'Guido Von Rossum' },
  { title: 'Let us C++', price: 849, author: 'Bjarne Stroustrup' },
  { title: 'JavaScript', price: 1499, author: 'Brendan Eich' }
];

const authorCounts = books.reduce((acc, book) => {
  acc[book.author] = (acc[book.author] || 0) + 1;
  return acc;
}, {});

console.log(authorCounts);