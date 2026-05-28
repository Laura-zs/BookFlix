import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleRegister(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await api.post(

          "/auth/register",

          {

            name,

            email,

            password

          }

        );

      // salva token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // salva usuário
      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )

      );

      alert(
        "Conta criada com sucesso 😎"
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        "Erro ao cadastrar"

      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-black min-h-screen flex items-center justify-center px-6">

      <form

        onSubmit={handleRegister}

        className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl w-full max-w-[420px] shadow-2xl"

      >

        <h1 className="text-white text-4xl mb-8 font-bold text-center">

          Criar Conta

        </h1>

        {/* NOME */}
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          className="w-full mb-4 p-4 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-red-600 transition"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          className="w-full mb-4 p-4 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-red-600 transition"
        />

        {/* SENHA */}
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
          className="w-full mb-6 p-4 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-red-600 transition"
        />

        {/* BOTÃO */}
        <button

          disabled={loading}

          className="
          w-full
          bg-red-600
          hover:bg-red-500
          disabled:bg-red-900
          p-4
          rounded-lg
          font-bold
          text-white
          transition
          duration-300
          hover:scale-[1.02]
          "

        >

          {
            loading
              ? "Criando..."
              : "Registrar"
          }

        </button>

      </form>

    </div>

  );

}