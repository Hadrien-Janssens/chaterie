import { useLocation, useNavigate } from "react-router-dom";
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
    <div className="sticky top-0 z-30 bg-white  mb-5">
      <div className="flex justify-end h-12 w-full items-center px-3">
        <div className="grow">
          {isHomePage ? null : (
            <button onClick={() => navigate(-1)} className="text-xl">
              <FaArrowLeft />
            </button>
          )}
        </div>

        <BurgerMenu />
      </div>
    </div>
  );
};

export default Nav;
