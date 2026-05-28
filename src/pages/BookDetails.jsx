import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import StarRating from "../components/StarRating";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1>Livro não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">

      {/* BOTÃO VOLTAR */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
      >
        ← Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-8">

        {/* CAPA */}
        <img
          src={book.cover}
          alt={book.title}
          className="w-full md:w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
        />

        {/* INFO */}
        <div className="flex-1">

          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-400 mb-2">{book.author}</p>
          <p className="text-gray-400 mb-2">{book.author}</p>
          <StarRating rating={book.rating} />

          <span className="inline-block bg-red-600 px-3 py-1 rounded text-sm mb-4">
            {book.category}
          </span>

          {/* SINOPSE */}
          <h2 className="text-xl font-semibold mt-4 mb-2">Sinopse</h2>
          <p className="text-gray-300">{book.synopsis}</p>

          {/* ONDE ENCONTRAR */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Onde encontrar
          </h2>

          <div className="flex gap-4 flex-wrap">
            {book.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}