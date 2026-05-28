import { Link } from "react-router-dom";

export default function BookRow({ title, books }) {

  // remover duplicados
  const uniqueBooks = books.filter(

    (book, index, self) =>

      index ===
      self.findIndex(

        (b) =>

          (b.key || b.bookId) ===
          (book.key || book.bookId)

      )

  );

  return (

    <div className="mb-16">

      {/* TÍTULO */}
      <div className="mb-8">

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">

          {title}

        </h2>

        <div className="w-24 h-1 bg-red-600 mt-3 rounded-full" />

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">

        {uniqueBooks.map((book, index) => {

          // CAPA
          const coverId =

            book.cover_i ||
            book.covers?.[0];

          // ID DO LIVRO
          const workId =

            book.bookId ||
            book.key?.replace("/works/", "");

          return (

            <Link

              key={`${workId}-${index}`}

              to={`/book/${workId}`}

              className="group relative"

            >

              {/* CAPA */}
              <img

                src={
                  coverId

                    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`

                    : "https://dummyimage.com/300x450/111/fff.png&text=Sem+Capa"
                }

                alt={book.title}

                className="w-full h-[320px] object-cover rounded-lg transition duration-300 group-hover:scale-105"

                onError={(e) => {

                  e.target.src =
                    "https://dummyimage.com/300x450/111/fff.png&text=Sem+Capa";

                }}

              />

              {/* HOVER */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end p-3">

                <h3 className="text-sm font-bold text-white line-clamp-3">

                  {book.title}

                </h3>

              </div>

            </Link>

          );

        })}

      </div>

    </div>

  );

}