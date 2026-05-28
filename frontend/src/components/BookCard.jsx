import { Link } from "react-router-dom";

export default function BookCard({ book }) {

  // pega id corretamente
  const workId = book.key
    ? book.key.replace("/works/", "")
    : null;

  // impede livros quebrados
  if (!workId) return null;

  // capa
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://dummyimage.com/180x260/111/fff.png&text=Sem+Capa";

  return (

    <Link to={`/book/${workId}`}>

      <div className="relative min-w-[180px] group hover:scale-105 transition duration-300">

        <img
          src={cover}
          alt={book.title}
          className="w-full h-[260px] object-cover rounded-lg"
        />

        {/* hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-2">

          <p className="text-center text-sm font-bold">
            {book.title}
          </p>

        </div>

      </div>

    </Link>

  );
}