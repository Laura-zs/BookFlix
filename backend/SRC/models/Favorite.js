import mongoose from "mongoose";

const favoriteSchema =
  new mongoose.Schema({

    userId: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User"

    },

    bookId: String,

    title: String,

    cover_i: Number

  });

const Favorite =
  mongoose.model(
    "Favorite",
    favoriteSchema
  );

export default Favorite;