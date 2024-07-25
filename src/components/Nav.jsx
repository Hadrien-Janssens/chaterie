import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Nav = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHomePage(false);
    }
  }, [location]);

  return (
    <div className="sticky top-0 z-30 bg-white  mb-5 backdrop-blur-md bg-white/30">
      <div className="flex justify-end h-12 w-full items-center px-3">
        <div className="grow">
          {isHomePage ? null : (
            <button onClick={() => navigate(-1)} className="text-xl">
              <FaArrowLeft />
            </button>
          )}
        </div>
        <BurgerMenu />
        <ul className=" gap-5 hidden sm:flex font-bold font-poetsenone text-gray-700">
          <li>
            <NavLink to={"/"}>
              <p className="hover:text-[#B38D7D] duration-100 text-xl">
                Accueil
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/elevage/"}>
              <p className="hover:text-[#B38D7D] duration-100 text-xl">
                Elevage
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/chatons/"}>
              <p className="hover:text-[#B38D7D] duration-100 text-xl">
                Nos chatons
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/reproducteurs/"}>
              <p className="hover:text-[#B38D7D] duration-100 text-xl">
                Nos chats
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
