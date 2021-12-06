export default class BookModel {
  id;
  imageSrc;
  imageAlt;
  title;
  author;

  constructor(id, title, author, imageSrc, imageAlt) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.imageSrc = imageSrc;
    this.imageAlt = imageAlt;
  }
}
