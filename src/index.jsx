import ReactDOM from 'react-dom';
import BookList from './components/bookList';
import getBooks from './services/bookService';

import './index.css';

ReactDOM.render(
  <BookList books={getBooks()} />,
  document.getElementById('root'),
);
