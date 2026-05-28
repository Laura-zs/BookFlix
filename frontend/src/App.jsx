import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="pt-20">

        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/favorites"element={<Favorites />}/>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/book/:workId"
            element={<BookDetails />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;