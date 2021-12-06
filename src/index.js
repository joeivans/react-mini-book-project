import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="The Big Book of Silly Jokes for Kids"
        author="Carole P. Roman"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg"
      />
    </section>
  );
}

const Book = ({ title, author, imgSrc }) => {
  return (
    <article>
      <Title title={title} />
      <Author author={author} />
      <Image src={imgSrc} />
    </article>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;
const Author = ({ author }) => <p>{author}</p>;
const Image = ({ src }) => <img src={src} alt="" />;

ReactDOM.render(<BookList />, document.getElementById('root'));
