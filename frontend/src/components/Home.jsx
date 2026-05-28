import { useEffect, useState } from "react";

import BookRow from "../components/BookRow";

import SearchBar from "../components/SearchBar";

import { searchBooks } from "../services/googleBooks";

export default function Home() {

  const [recommendedBooks, setRecommendedBooks] =
    useState([]);

  const [searchResults, setSearchResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  // RECOMENDADOS
  useEffect(() => {

    async function loadRecommended() {

      try {

        const data =
          await searchBooks("harry potter");

        setRecommendedBooks(
          data.filter(book => book.key)
        );

      } catch (error) {

        console.log(error);

      }

    }

    loadRecommended();

  }, []);

  // PESQUISA
  async function handleSearch(query) {

    if (!query.trim()) {

      setSearchResults([]);

      return;

    }

    try {

      setLoading(true);

      const data =
        await searchBooks(query);

      setSearchResults(
        data.filter(book => book.key)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-black text-white min-h-screen px-6 pt-32">

      {/* SEARCH */}
      <SearchBar
        onSearch={handleSearch}
      />

      {/* LOADING */}
      {
        loading && (

          <p className="mt-10 text-center">

            Carregando...

          </p>

        )
      }

      {/* RESULTADOS */}
      {
        searchResults.length > 0 ? (

          <BookRow
            title="Resultados"
            books={searchResults}
          />

        ) : (

          <BookRow
            title="🔥 Recomendados"
            books={recommendedBooks}
          />

        )
      }

    </div>

  );

}