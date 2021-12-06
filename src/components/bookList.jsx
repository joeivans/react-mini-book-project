import '../lib/bookModelExtensions';

function BookList(books) {
  return (
    <section className="booklist">{books.books.map((_) => _.toJsx())}</section>
  );
}

export default BookList;
