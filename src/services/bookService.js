import BookModel from '../models/bookModel';

const books = [
  new BookModel(
    0,
    'The Big Book of Silly Jokes for Kids',
    'Carole P. Roman',
    'https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg',
    'The Big Book of Silly Jokes for Kids',
  ),
  new BookModel(
    1,
    'If Animals Kissed Good Night',
    'Ann Whitford Paul',
    'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
    'If Animals Kissed Good Night',
  ),
];

function getBooks() {
  return books;
}

export default getBooks;
