import "./book.css";
export default function Book() {
  const books = [
    {
      id: 1,
      title: "Drop Dead Sisters (The Finch Sisters Book 1)",
      author: "Amelia Diane Coombs",
      genre: "Fantasy",
      year: 2018,
      publisher: "Crown",
      pages: 304,
      language: "English",
      image: "https://m.media-amazon.com/images/I/71bFOQxoysL._SL1500_.jpg",
      description: "",
      rating: 5,
      price: 10,
    },

    {
      id: 2,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      year: 2019,
      publisher: "Celadon Books",
      pages: 336,
      language: "English",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      description: "A woman shoots her husband and never speaks again.",
      rating: 4.5,
      price: 15,
    },

    {
      id: 3,
      title: "Educated: A Memoir",
      author: "Tara Westover",
      genre: "Memoir",
      year: 2018,
      publisher: "Random House",
      pages: 352,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household in rural Idaho.",
      rating: 4.8,
      price: 12,
    },

    {
      id: 4,
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Biography",
      year: 2018,
      publisher: "Crown Publishing Group",
      pages: 448,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
      description:
        "The former First Lady of the United States chronicles her life and experiences.",
      rating: 4.9,
      price: 20,
    },
  ];

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "100px" }}
              />
              <strong>{book.title}</strong> - {book.author}
              <br />
              Genre: {book.genre}
              <br />
              Year: {book.year}
              <br />
              Publisher: {book.publisher}
              <br />
              Pages: {book.pages}
              <br />
              Language: {book.language}
              <br />
              Description: {book.description}
              <br />
              Rating: {book.rating} stars
              <br />
              Price: ${book.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
