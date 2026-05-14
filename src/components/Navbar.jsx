import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed w-full z-10">
      <h1 className="text-red-600 text-2xl font-bold">BOOKFLIX</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
      </div>
    </nav>
  );
}