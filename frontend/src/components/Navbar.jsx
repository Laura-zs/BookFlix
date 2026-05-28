import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const token =
    localStorage.getItem("token");

  const user =
  JSON.parse(
    localStorage.getItem("user")
  );
  const initial =
  user?.name?.charAt(0)?.toUpperCase()
  || "U";

  function handleLogout() {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  }

  const navLink =
    "hover:text-red-500 transition duration-300";

  const activeLink =
    "text-red-500 font-bold";

  return (

    <header className="fixed top-0 left-0 w-full z-50">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/20 backdrop-blur-md border-b border-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">

        {/* LOGO */}
        <Link to="/">

          <h1 className="text-red-600 text-3xl md:text-4xl font-extrabold tracking-wide hover:scale-105 hover:text-red-500 transition duration-300 cursor-pointer select-none">

            BOOKFLIX

          </h1>

        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-5 md:gap-7 text-white text-sm md:text-base font-semibold">

          {/* HOME */}
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? activeLink
                : navLink
            }
          >

            Home

          </Link>

          {/* FAVORITES */}
          {
            token && (

              <Link
                to="/favorites"
                className={
                  location.pathname === "/favorites"
                    ? activeLink
                    : navLink
                }
              >

                Favoritos

              </Link>

            )
          }

          {/* SEM LOGIN */}
          {
            !token ? (

              <>

                <Link
                  to="/login"
                  className={
                    location.pathname === "/login"
                      ? activeLink
                      : navLink
                  }
                >

                  Login

                </Link>

                <Link
                  to="/register"
                  className="bg-red-600 hover:bg-red-500 hover:scale-105 px-4 py-2 rounded-lg transition duration-300 shadow-lg"
                >

                  Registrar

                </Link>

              </>

            ) : (

              <>
              
                {/* USER */}
                <div className="hidden md:flex items-center gap-2 text-gray-300">

                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-bold">

                    {initial}

                  </div>

                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-500 hover:scale-105 px-4 py-2 rounded-lg transition duration-300 shadow-lg"
                >

                  Sair

                </button>

              </>

            )
          }

        </nav>

      </div>

    </header>

  );

}