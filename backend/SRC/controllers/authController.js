import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/User.js";

export async function register(
  req,
  res
) {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    // verifica email
    const userExists =
      await User.findOne({ email });

    if (userExists) {

      return res
        .status(400)
        .json({

          message:
            "Usuário já existe"

        });

    }

    // senha criptografada
    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // cria user
    const user =
      await User.create({

        name,

        email,

        password:
          hashedPassword

      });

    // token
    const token =
      jwt.sign(

        {

          id: user._id

        },

        process.env.JWT_SECRET,

        {

          expiresIn: "7d"

        }

      );

    res.json({

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });

  } catch (error) {

    console.log(error);

    res
      .status(500)
      .json(error);

  }

}

export async function login(
  req,
  res
) {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({
        email
      });

    if (!user) {

      return res
        .status(400)
        .json({

          message:
            "Usuário não encontrado"

        });

    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {

      return res
        .status(400)
        .json({

          message:
            "Senha inválida"

        });

    }

    const token =
      jwt.sign(

        {

          id: user._id

        },

        process.env.JWT_SECRET,

        {

          expiresIn: "7d"

        }

      );

    res.json({

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });

  } catch (error) {

    console.log(error);

    res
      .status(500)
      .json(error);

  }

}