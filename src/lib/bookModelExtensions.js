import BookModel from '../models/bookModel';
import Book from '../components/book';

function toJsx() {
  // attach the prototype function immediately
  return (BookModel.prototype.toJsx = function toJsx() {
    return (
      <Book
        title={this.title}
        author={this.author}
        imgSrc={this.imageSrc}
        imgAlt={this.imageAlt}
        key={this.id}
      />
    );
  });
}

function attachExtensions() {
  toJsx();
}

export default attachExtensions();
