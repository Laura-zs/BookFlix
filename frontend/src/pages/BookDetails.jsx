import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import api from "../services/api";

export default function BookDetails() {

  const { workId } =
    useParams();

  const [book, setBook] =
    useState(null);

  const [favoriteLoading, setFavoriteLoading] =
    useState(false);

  // título
  const title =
    book?.title || "Livro sem título";

  // descrição
  const rawDescription =

    typeof book?.description === "string"

      ? book.description

      : book?.description?.value ||

        "Sem descrição disponível";

  // limpar descrição
  const cleanDescription =

    rawDescription
      .replace(/https?:\/\/\S+/g, "")
      .replace(/\[.*?\]/g, "")
      .replace(/\(source.*?\)/gi, "")
      .trim();

  // limitar caracteres
  const description =

    cleanDescription.length > 280

      ? cleanDescription.slice(0, 280) + "..."

      : cleanDescription;

  // link OpenLibrary
  const openLibraryUrl =
    `https://openlibrary.org/works/${workId}`;

  // BUSCAR LIVRO
  useEffect(() => {

    async function fetchBook() {

      try {

        const response =
          await fetch(

            `https://openlibrary.org/works/${workId}.json`

          );

        const data =
          await response.json();

        setBook(data);

      } catch (error) {

        console.log(error);

      }

    }

    if (workId) {

      fetchBook();

    }

  }, [workId]);

  // FAVORITAR
  async function handleFavorite() {

    try {

      setFavoriteLoading(true);

      const token =
        localStorage.getItem("token");

      if (!token) {

        alert(
          "Faça login para favoritar 😎"
        );

        return;

      }

      await api.post(

        "/favorites",

        {

          bookId: workId,

          title: title,

          cover_i:

            book.covers?.[0] ||

            book.cover_i ||

            null

        },

        {

          headers: {

            Authorization:
              `Bearer ${token}`

          }

        }

      );

      alert(
        "Livro favoritado ❤️"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Erro ao favoritar"
      );

    } finally {

      setFavoriteLoading(false);

    }

  }

  // LOADING
  if (!book) {

    return (

      <div className="bg-black text-white min-h-screen flex items-center justify-center text-2xl">

        Carregando livro...

      </div>

    );

  }

  return (

    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <div className="relative h-[550px] w-full overflow-hidden">

        {/* BACKGROUND */}
        <img
          src={
            book.covers?.[0]

              ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`

              : "https://dummyimage.com/1200x500/111/fff.png&text=Sem+Capa"
          }
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md scale-110"
          onError={(e) => {

            e.target.src =
              "https://dummyimage.com/1200x500/111/fff.png&text=Sem+Capa";

          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">

            {title}

          </h1>

          <div className="flex items-center gap-4 mb-6 text-lg">

            <span className="text-yellow-400 font-bold">

              ⭐ 4.8

            </span>

            <span className="text-green-400 font-semibold">

              Disponível

            </span>

          </div>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl break-words">

            {description}

          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

          {/* CAPA */}
          <img
            src={
              book.covers?.[0]

                ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`

                : "https://dummyimage.com/300x450/111/fff.png&text=Sem+Capa"
            }
            alt={title}
            className="w-[220px] md:w-[300px] rounded-xl shadow-2xl"
            onError={(e) => {

              e.target.src =
                "https://dummyimage.com/300x450/111/fff.png&text=Sem+Capa";

            }}
          />

          {/* INFO */}
          <div className="flex-1 w-full">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">

              Sobre o livro

            </h2>

            <div className="space-y-5 text-lg text-gray-300 mb-10">

              <p>📚 Fonte: Open Library</p>

              <p>🔥 Estilo: BookFlix</p>

              <p>⭐ Avaliação média: 4.8</p>

              <p>🌎 Biblioteca Online</p>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={() =>
                  window.open(
                    openLibraryUrl,
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-500 hover:scale-105 px-8 py-4 rounded-lg text-lg font-bold transition duration-300"
              >

                Ver Livro

              </button>

              <button

                onClick={handleFavorite}

                disabled={favoriteLoading}

                className="
                bg-gray-800
                hover:bg-gray-700
                hover:scale-105
                px-8
                py-4
                rounded-lg
                text-lg
                font-bold
                transition
                duration-300
                disabled:opacity-50
                "

              >

                {
                  favoriteLoading

                    ? "Salvando..."

                    : "❤️ Favoritar"
                }

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}