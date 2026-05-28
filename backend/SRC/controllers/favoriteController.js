import Favorite from "../models/Favorite.js";

export async function addFavorite(
  req,
  res
) {

  try {

    const {
      bookId,
      title,
      cover_i
    } = req.body;

    const favorite =
      await Favorite.create({

        userId: req.userId,

        bookId,

        title,

        cover_i

      });

    res.json(favorite);

  } catch (error) {

    res.status(500).json(error);

  }

}

export async function getFavorites(
  req,
  res
) {

  try {

    const favorites =
      await Favorite.find({

        userId: req.userId

      });

    res.json(favorites);

  } catch (error) {

    res.status(500).json(error);

  }

}