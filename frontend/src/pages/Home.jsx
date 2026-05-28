import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { searchBooks } from "../services/googleBooks";

import BookRow from "../components/BookRow";
import SearchBar from "../components/SearchBar";

export default function Home() {

  const [books, setBooks] = useState([]);

  const [recommended, setRecommended] =
    useState([]);

  const [featuredBook, setFeaturedBook] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  // categorias
  const categories = [

    {
      title: "Tendências da Semana",
      query: "bestseller"
    },

    {
      title: "Fantasia Épica",
      query: "fantasy"
    },

    {
      title: "Mistério & Suspense",
      query: "thriller"
    },

    {
      title: "Romances Memoráveis",
      query: "romance"
    }

  ];

  // pesquisar livros
  async function handleSearch(query) {

    setSearch(query);

    // pesquisa vazia
    if (query.trim() === "") {

      setBooks([]);

      return;

    }

    setLoading(true);

    try {

      const data =
        await searchBooks(query);

      setBooks(
        data.filter(book => book.key)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  // carregar recomendados
  useEffect(() => {

    async function fetchRecommended() {

      try {

        const promises =
          categories.map(async (category) => {

            const response =
              await fetch(

                `https://openlibrary.org/search.json?q=${category.query}`

              );

            const data =
              await response.json();

            return {

              title: category.title,

              books:
                data.docs
                  .filter(book => book.key)
                  .slice(0, 12)

            };

          });

        const results =
          await Promise.all(promises);

        setRecommended(results);

        // livro destaque
        if (
          results[0] &&
          results[0].books.length > 0
        ) {

          setFeaturedBook(
            results[0].books[0]
          );

        }

      } catch (error) {

        console.log(error);

      }

    }

    fetchRecommended();

  }, []);

  return (

    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      {
        featuredBook && (

          <div className="relative h-[90vh] w-full overflow-hidden">

            {/* BACKGROUND */}
            <img

              src={
                featuredBook.cover_i

                  ? `https://covers.openlibrary.org/b/id/${featuredBook.cover_i}-L.jpg`

                  : "https://dummyimage.com/1400x800/111/fff.png&text=BOOKFLIX"
              }

              alt={featuredBook.title}

              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40"

            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            {/* CONTEÚDO */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-20">

              <div className="max-w-2xl">

                <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-5 font-bold">

                  BookFlix Collection

                </p>

                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">

                  {featuredBook.title}

                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-8 mb-10">

                  Explore milhares de histórias incríveis,
                  aventuras épicas e mundos inesquecíveis.

                </p>

                {/* BOTÕES */}
                <div className="flex flex-wrap gap-5">

                  {/* VER LIVRO */}
                  <Link
                    to={`/book/${featuredBook.key.replace("/works/", "")}`}
                  >

                    <button className="bg-red-600 hover:bg-red-500 px-10 py-4 rounded-xl text-lg font-bold transition duration-300 hover:scale-105 shadow-lg shadow-red-600/30">

                      Ver Livro

                    </button>

                  </Link>

                  {/* FAVORITOS */}
                  <Link to="/favorites">

                    <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-10 py-4 rounded-xl text-lg font-bold transition duration-300 hover:scale-105 border border-white/10">

                      Minha Lista

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          </div>

        )
      }

      {/* CONTEÚDO */}
      <div className="px-6 md:px-10 -mt-24 relative z-20">

        {/* SEARCH */}
        <div className="mb-14">

          <SearchBar
            onSearch={handleSearch}
          />

        </div>

        {/* LOADING */}
        {
          loading ? (

            <div className="flex items-center justify-center py-20">

              <p className="text-xl text-gray-300">

                Carregando livros...

              </p>

            </div>

          ) : (

            <>
              {/* RESULTADOS */}
              {
                search.trim() !== "" ? (

                  <BookRow
                    title="Resultados da Pesquisa"
                    books={books}
                  />

                ) : (

                  <>
                    {/* CATEGORIAS */}
                    {
                      recommended.map((category) => (

                        <BookRow

                          key={category.title}

                          title={category.title}

                          books={category.books}

                        />

                      ))
                    }

                  </>

                )
              }

            </>

          )
        }

      </div>

    </div>

  );

}