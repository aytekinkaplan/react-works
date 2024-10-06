export default function Book() {
  const books = [
    {
      id: 1,
      title: "The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
    },
    {
      id: 2,
      title: "The Two Towers",
      author: "J. R. R. Tolkien",
    },
    {
      id: 3,
      title: "The Return of the King",
      author: "J. R. R. Tolkien",
    },
  ];
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
