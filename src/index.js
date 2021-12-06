import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Title title="The Big Book of Silly Jokes for Kids" />
      <Author author="Carole P. Roman" />
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg" />
    </article>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;
const Author = ({ author }) => <p>{author}</p>;
const Image = ({ src }) => <img src={src} alt="" />;

ReactDOM.render(<BookList />, document.getElementById("root"));
