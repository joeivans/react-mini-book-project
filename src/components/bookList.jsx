import '../lib/bookModelExtensions';

const BookList = function ({ books }) {
  return (
    <section className="booklist">{books.map((_) => _.toJsx())}</section>
    // <section className="booklist">{books.map((_) => _)}</section>
  );
};

export default BookList;
