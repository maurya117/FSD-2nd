//Write a JavaScript program that identifies the book with the longest title.

const books = [
  { title: 'Let us C', price: 499, author: 'Y.Kanetkar' },
  { title: 'Java Programming', price: 699, author: 'James Gosling' },
  { title: 'Python', price: 799, author: 'Guido Von Rossum' },
  { title: 'Let us C++', price: 849, author: 'Bjarne Stroustrup' },
  { title: 'JavaScript', price: 1499, author: 'Brendan Eich' }
];

const longestTitleBook = books.reduce((longest, current) => 
  current.title.length > longest.title.length ? current : longest
);

console.log(longestTitleBook);