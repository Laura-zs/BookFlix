import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mb-8"
    >
      <input
        type="text"
        placeholder="Buscar livros..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[300px] md:w-[500px] px-4 py-3 rounded-l bg-gray-800 text-white outline-none"
      />

      <button
        type="submit"
        className="bg-red-600 px-6 rounded-r hover:bg-red-500"
      >
        Buscar
      </button>
    </form>
  );
}