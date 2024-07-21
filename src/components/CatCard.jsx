import { CgGenderMale } from "react-icons/cg";
import { motion } from "framer-motion";
import Button from "./Button";
import { useEffect, useState } from "react";

const CatCard = ({ chaton }) => {
  const [toggle, setToggle] = useState(true);

  const [imgKey, setImgKey] = useState("/urban.jpeg");

  const handleClick = () => {
    setToggle(!toggle);
  };

  const growUp = {
    open: { width: "150px", height: "150px" },
    close: { width: "100vw", height: "500px" },
  };

  return (
    <div className="bg-[#F4F4F4]  p-7 relative">
      <div className="flex justify-center gap-10 flex-wrap ">
        <div>
          <div className="flex flex-col justify-center items-center gap-5 relative  m-auto">
            <div className="relative z-10">
              <motion.img
                className="object-cover h-[150px] w-[150px] shadow-md"
                src={imgKey}
                alt="claire"
                animate={toggle ? "open" : "close"}
                variants={growUp}
              />

              <div className="absolute -top-2 -left-2 bg-white w-[100px] h-[100px] -z-10"></div>
              <div className="absolute -bottom-2 -right-2 bg-white  w-[100px] h-[100px] -z-10"></div>
            </div>
          </div>
          <div className=" flex justify-center mt-3 gap-1">
            {!toggle &&
              chaton.img?.map((img, key) => (
                <img
                  src={img.url}
                  key={key}
                  alt=""
                  className="w-10"
                  onClick={() => setImgKey(img.url)}
                />
              ))}
          </div>
        </div>
        <motion.div className=" flex flex-col">
          <h3 className="text-[#837067] opacity-[60%] font-extrabold text-lg font-poetsenone">
            <div className="flex items-center gap-1 mt-5">
              {chaton.name}
              <CgGenderMale className="text-2xl" />
            </div>
          </h3>
          <p className="font-medium mb-6">né le 05/07/2024</p>
          {/* <NavLink to={`/chaton/${chaton.id}`}> */}
          <Button onClick={handleClick}>
            {toggle ? "Voir plus" : "Voir moins"}
          </Button>
          {/* </NavLink> */}

          <div className="absolute w-[20%] h-[20%] border-[#B38D7D] border-t-4 border-r-4 top-5 right-5"></div>
          <div className="absolute w-[20%] h-[20%] border-[#B38D7D] border-b-4 border-r-4 bottom-5 right-5"></div>
        </motion.div>
      </div>
      <p className="text-justify mt-5 mb-2 w-11/12 m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud{" "}
      </p>
    </div>
  );
};

export default CatCard;
