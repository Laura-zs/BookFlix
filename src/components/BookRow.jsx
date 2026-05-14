import BookCard from "./BookCard";

export default function BookRow({ title, books = [] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold ml-6 mb-3">{title}</h2>

      <div className="flex overflow-x-auto gap-6 px-6">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-gray-400">Nenhum livro encontrado</p>
        )}
      </div>
    </div>
  );
}