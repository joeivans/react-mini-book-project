import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
      <Book
        title="If Animals Kissed Good Night"
        author="Ann Whitford Paul"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"
        imgAlt="If Animals Kissed Good Night"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
        imgAlt="The Big Book of Silly Jokes for Kids"
      />
    </section>
  );
}

const Book = ({ title, author, imgSrc, imgAlt }) => {
  return (
    <article className="book">
      <Image src={imgSrc} alt={imgAlt} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;
const Author = ({ author }) => <p>{author}</p>;
const Image = ({ src, alt }) => <img src={src} alt={alt} />;

ReactDOM.render(<BookList />, document.getElementById('root'));
