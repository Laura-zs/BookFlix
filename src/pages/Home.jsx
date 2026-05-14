import { books } from "../data/books";
import BookRow from "../components/BookRow";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <BookRow title="Populares" books={books} />
      
    </div>
  );
}