import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    try {

      const response =
        await api.post("/auth/login", {

          email,

          password

        });

      localStorage.setItem(

        "token",

        response.data.token

      );

      localStorage.setItem(

        "user",

        JSON.stringify(response.data.user)

      );

      alert("Login realizado 😎");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Erro no login");

    }

  }

  return (

    <div className="bg-black min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-10 rounded-xl w-[400px]"
      >

        <h1 className="text-white text-3xl mb-8 font-bold">

          Login

        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mb-4 p-4 rounded bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mb-6 p-4 rounded bg-zinc-800 text-white"
        />

        <button
          className="w-full bg-red-600 p-4 rounded font-bold"
        >

          Entrar

        </button>

      </form>

    </div>

  );

}