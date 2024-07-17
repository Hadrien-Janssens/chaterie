import { useLocation, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";

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
    <div className="flex justify-end h-12 items-center px-3">
      <div className="grow">
        {isHomePage ? null : (
          <button
            onClick={() => navigate(-1)}
            className="border rounded-full px-2"
          >
            Retour
          </button>
        )}
      </div>

      <BurgerMenu />
    </div>
  );
};

export default Nav;
