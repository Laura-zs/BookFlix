import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="relative min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] cursor-pointer group transition duration-300 hover:scale-110">
        
        {/* IMAGEM */}
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-[430px] object-cover rounded-lg shadow-lg group-hover:brightness-50 transition duration-300"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <p className="text-white text-base font-bold text-center px-3 drop-shadow-lg">
            {book.title}
          </p>
        </div>

      </div>
    </Link>
  );
}