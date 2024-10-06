import "./book.css";
export default function Book() {
  const books = [
    {
      id: 1,
      title: "The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
      year: 1954,
      publisher: "George Allen & Unwin",
      pages: 423,
      language: "English",
    },
    {
      id: 2,
      title: "The Two Towers",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
      year: 1954,
      publisher: "George Allen & Unwin",
      pages: 352,
      language: "English",
    },
    {
      id: 3,
      title: "The Return of the King",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
      year: 1955,
      publisher: "George Allen & Unwin",
      pages: 416,
      language: "English",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      publisher: "Secker & Warburg",
      pages: 328,
      language: "English",
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Southern Gothic",
      year: 1960,
      publisher: "J.B. Lippincott & Co.",
      pages: 281,
      language: "English",
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romantic fiction",
      year: 1813,
      publisher: "T. Egerton",
      pages: 279,
      language: "English",
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Tragedy",
      year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      language: "English",
    },
    {
      id: 8,
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure fiction",
      year: 1851,
      publisher: "Harper & Brothers",
      pages: 635,
      language: "English",
    },
    {
      id: 9,
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical fiction",
      year: 1869,
      publisher: "The Russian Messenger",
      pages: 1225,
      language: "Russian",
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Philosophical fiction",
      year: 1866,
      publisher: "The Russian Messenger",
      pages: 430,
      language: "Russian",
    },
  ];

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
