import { useEffect, useState } from "react";

import api from "../services/api";

import BookRow from "../components/BookRow";

export default function Favorites() {

  const [favorites, setFavorites] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchFavorites() {

      try {

        const token =
          localStorage.getItem("token");

        const response =
          await api.get(

            "/favorites",

            {

              headers: {

                Authorization:
                  `Bearer ${token}`

              }

            }

          );

        setFavorites(
          response.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchFavorites();

  }, []);

  return (

    <div className="bg-black text-white min-h-screen pt-32 px-6">

      {
        loading ? (

          <p>Carregando...</p>

        ) : favorites.length > 0 ? (

          <BookRow
            title="Favoritos"
            books={favorites}
          />

        ) : (

          <p className="text-gray-400">

            Nenhum favorito ainda.

          </p>

        )
      }

    </div>

  );

}