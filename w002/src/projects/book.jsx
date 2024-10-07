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
      description: "A fantasy adventure of the Finch sisters.",
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
        "A woman who grows up in rural Idaho with limited education.",
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
      description: "The memoir of former First Lady Michelle Obama.",
      rating: 4.9,
      price: 20,
    },

    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Tragedy",
      year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      language: "English",
      image: "https://m.media-amazon.com/images/I/71XUo4QZRFL.jpg",
      description: "A tragic love story set in the Jazz Age.",
      rating: 4.2,
      price: 14,
    },

    {
      id: 6,
      title: "Project Hail Mary",
      author: "Andy Weir",
      genre: "Science Fiction",
      year: 2021,
      publisher: "Ballantine Books",
      pages: 496,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81rZH5mC2xL._SL1500_.jpg",
      description:
        "A lone astronaut must save Earth from disaster in this sci-fi thriller.",
      rating: 4.7,
      price: 22,
    },

    {
      id: 7,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fantasy",
      year: 2020,
      publisher: "Viking",
      pages: 304,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      description:
        "A library beyond life where every book offers a new life to live.",
      rating: 4.4,
      price: 16,
    },

    {
      id: 8,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      genre: "Science Fiction",
      year: 2021,
      publisher: "Knopf",
      pages: 320,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81tEgsxpNZS.jpg",
      description:
        "A moving novel that looks at the meaning of love, humanity, and consciousness.",
      rating: 4.5,
      price: 19,
    },

    {
      id: 9,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      genre: "Fantasy",
      year: 2020,
      publisher: "Tor Books",
      pages: 448,
      language: "English",
      image: "https://m.media-amazon.com/images/I/91-aN4sH1yL._SL1500_.jpg",
      description:
        "A woman makes a Faustian bargain to live forever but is forgotten by everyone she meets.",
      rating: 4.6,
      price: 21,
    },

    {
      id: 10,
      title: "The Vanishing Half",
      author: "Brit Bennett",
      genre: "Historical Fiction",
      year: 2020,
      publisher: "Riverhead Books",
      pages: 352,
      language: "English",
      image: "https://m.media-amazon.com/images/I/71cS8NuKl6L._SL1500_.jpg",
      description:
        "A novel about twin sisters who live very different lives due to their racial identity.",
      rating: 4.7,
      price: 18,
    },

    {
      id: 11,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Mystery",
      year: 2018,
      publisher: "G.P. Putnam's Sons",
      pages: 384,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81IKIMU4U+L._SL1500_.jpg",
      description:
        "A mystery about a woman who grows up in the marshes of North Carolina.",
      rating: 4.8,
      price: 17,
    },

    {
      id: 12,
      title: "The Four Winds",
      author: "Kristin Hannah",
      genre: "Historical Fiction",
      year: 2021,
      publisher: "St. Martin's Press",
      pages: 464,
      language: "English",
      image: "https://m.media-amazon.com/images/I/91J7Q1FdSDL._SL1500_.jpg",
      description:
        "A story of resilience and survival during the Great Depression.",
      rating: 4.6,
      price: 20,
    },

    {
      id: 13,
      title: "A Court of Silver Flames",
      author: "Sarah J. Maas",
      genre: "Fantasy",
      year: 2021,
      publisher: "Bloomsbury Publishing",
      pages: 757,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81t8kTh8-bL.jpg",
      description:
        "A continuation of the A Court of Thorns and Roses series, filled with action and romance.",
      rating: 4.8,
      price: 24,
    },

    {
      id: 14,
      title: "The Last Thing He Told Me",
      author: "Laura Dave",
      genre: "Mystery",
      year: 2021,
      publisher: "Simon & Schuster",
      pages: 320,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81nlJYNcfbL.jpg",
      description:
        "A woman uncovers dark secrets after her husband disappears.",
      rating: 4.3,
      price: 15,
    },

    {
      id: 15,
      title: "Malibu Rising",
      author: "Taylor Jenkins Reid",
      genre: "Historical Fiction",
      year: 2021,
      publisher: "Ballantine Books",
      pages: 384,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81JefBx9G0L.jpg",
      description:
        "Four famous siblings throw an epic party that changes their lives forever.",
      rating: 4.6,
      price: 19,
    },

    {
      id: 16,
      title: "The Paris Library",
      author: "Janet Skeslien Charles",
      genre: "Historical Fiction",
      year: 2021,
      publisher: "Atria Books",
      pages: 368,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81AI89mPZML.jpg",
      description:
        "A story of a librarian who joins the Resistance during World War II.",
      rating: 4.4,
      price: 18,
    },

    {
      id: 17,
      title: "Anxious People",
      author: "Fredrik Backman",
      genre: "Humor",
      year: 2020,
      publisher: "Atria Books",
      pages: 352,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81yxoUbQ7cL.jpg",
      description:
        "A quirky novel about a bank robber who takes hostages at an open house.",
      rating: 4.5,
      price: 16,
    },

    {
      id: 18,
      title: "The Push",
      author: "Ashley Audrain",
      genre: "Psychological Thriller",
      year: 2021,
      publisher: "Penguin Books",
      pages: 320,
      language: "English",
      image: "https://m.media-amazon.com/images/I/91KMbVVZzmL.jpg",
      description:
        "A mother's fears about her young daughter take a dark turn.",
      rating: 4.2,
      price: 17,
    },

    {
      id: 19,
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      genre: "Gothic Horror",
      year: 2020,
      publisher: "Del Rey",
      pages: 352,
      language: "English",
      image: "https://m.media-amazon.com/images/I/81CrCP-HZ+L.jpg",
      description:
        "A young woman investigates a haunted house in the Mexican countryside.",
      rating: 4.3,
      price: 19,
    },

    {
      id: 20,
      title: "The House in the Cerulean Sea",
      author: "TJ Klune",
      genre: "Fantasy",
      year: 2020,
      publisher: "Tor Books",
      pages: 400,
      language: "English",
      image: "https://m.media-amazon.com/images/I/91tMZ4wckkL.jpg",
      description:
        "A charming fantasy about a caseworker sent to a magical orphanage.",
      rating: 4.8,
      price: 22,
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
