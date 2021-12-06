import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpghttps://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg" />
    </article>
  );
};

const Image = (src) => <img src="{src}" alt="" />;

ReactDOM.render(<BookList />, document.getElementById("root"));
