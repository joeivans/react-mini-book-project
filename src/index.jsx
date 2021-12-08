import ReactDOM from 'react-dom';
import BookList from './components/bookList';
import getBooks from './services/bookService';
import Header from './components/header';
import Footer from './components/footer';

import './index.css';

function app() {
  return (
    <>
      <Header />
      <BookList books={getBooks()} />
      <Footer />
    </>
  );
}

ReactDOM.render(
  app(),
  document.getElementById('root'),
);
