import Image from './image';
import Title from './title';
import Author from './author';
import AddToCart from './addToCart';

const Book = function ({
  title, author, imgSrc, imgAlt,
}) {
  return (
    <article className="book">
      <Image src={imgSrc} alt={imgAlt} />
      <Title title={title} />
      <Author author={author} />
      <AddToCart itemName={title} />
    </article>
  );
};

export default Book;
