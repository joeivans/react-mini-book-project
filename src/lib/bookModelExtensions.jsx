import BookModel from '../models/bookModel';
import Book from '../components/book';

BookModel.prototype.toJsx = function () {
  return (
    <Book
      title={this.title}
      author={this.author}
      imgSrc={this.imageSrc}
      imgAlt={this.imageAlt}
      key={this.id}
    />
  );
};

export default this;
