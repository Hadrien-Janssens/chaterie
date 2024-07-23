import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const top = {
    open: { rotate: "45deg" },
    close: { rotate: "0deg" },
  };
  const middle = {
    open: { opacity: 0 },
    close: { opacity: 1 },
  };
  const bottom = {
    open: {
      rotate: "-45deg",
      width: "40px",
    },
    close: { rotate: "0deg", width: "24px" },
  };
  const container = {
    open: {
      height: "32px",
    },
    close: {
      height: "24px",
    },
  };
  const menu = {
    open: {
      left: "0%",
    },
    close: {
      left: "-100%",
    },
  };
  return (
    <>
      <motion.div
        className="flex flex-col w-10 h-6 items-end justify-between z-[9999] cursor-pointer sm:hidden"
        animate={isOpen ? "open" : "close"}
        onClick={() => setIsOpen(!isOpen)}
        variants={container}
      >
        <motion.div
          className="h-1 w-10 bg-slate-700 rounded-lg origin-left"
          variants={top}
        ></motion.div>
        <motion.div
          className="h-1 w-8 bg-slate-700 rounded-lg"
          variants={middle}
        ></motion.div>
        <motion.div
          className={
            !isOpen
              ? "h-1 w-6 bg-[#B38D7D] opacity-[70%] rounded-lg origin-left"
              : "h-1 w-6 bg-slate-700  rounded-lg origin-left"
          }
          variants={bottom}
        ></motion.div>
      </motion.div>
      <motion.div
        className="absolute w-full h-screen top-0 bg-white z-50 flex flex-col items-center justify-center gap-5 text-3xl font-bold font-poetsenone "
        animate={isOpen ? "open" : "close"}
        variants={menu}
      >
        <NavLink to={"/"} onClick={() => setIsOpen(!isOpen)}>
          <p className="hover:text-[#B38D7D] duration-100">Accueil</p>
        </NavLink>
        <NavLink to={"/elevage"} onClick={() => setIsOpen(!isOpen)}>
          <p className="hover:text-[#B38D7D] duration-100">Elevage</p>
        </NavLink>
        <NavLink to={"/chatons"} onClick={() => setIsOpen(!isOpen)}>
          <p className="hover:text-[#B38D7D] duration-100">Nos chatons</p>
        </NavLink>
        <NavLink to={"/reproducteurs"} onClick={() => setIsOpen(!isOpen)}>
          <p className="hover:text-[#B38D7D] duration-100">Nos chats</p>
        </NavLink>
      </motion.div>
    </>
  );
};

export default BurgerMenu;
