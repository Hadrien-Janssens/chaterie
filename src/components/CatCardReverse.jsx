import { CgGenderMale } from "react-icons/cg";

import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
const CatCard = ({ chaton }) => {
  const [toggle, setToggle] = useState(true);

  const [imgKey, setImgKey] = useState("/urban.jpeg");

  const handleClick = () => {
    setToggle(!toggle);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const growUp = {
    open: { width: "150px", height: "150px" },
    close: { width: "100vw", height: "500px" },
  };
  return (
    <div className="bg-white  p-7 relative">
      <div className="flex flex-row-reverse justify-center gap-10 flex-wrap">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-5 relative  m-auto">
            <div className="relative z-10">
              <motion.img
                className="object-cover h-[150px] w-[150px] shadow-md  group-hover:scale-[1.1] group-hover:shadow-lg duration-300"
                src={imgKey}
                alt="claire"
                animate={toggle ? "open" : "close"}
                variants={growUp}
              />

              <div className="absolute -top-2 -left-2 bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10"></div>
              <div className="absolute -bottom-2 -right-2 bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10"></div>
            </div>
          </div>
        </div>
        <motion.div className=" flex flex-col" ref={ref}>
          <h3 className="text-[#837067] opacity-[60%] font-extrabold text-lg font-poetsenone">
            <div className="flex items-center gap-1 mt-5">
              {chaton.cha_name}
              <CgGenderMale className="text-2xl" />
            </div>
          </h3>
          <p className="font-medium mb-6">né le 05/07/2024</p>
          <Button onClick={handleClick}>
            {toggle ? "Voir plus" : "Voir moins"}
          </Button>

          <div
            className="absolute w-[20%] h-[20%] border-[#51687F] opacity-[70%] border-t-4 border-l-4 top-5 left-5"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          ></div>
          <div
            className="absolute w-[20%] h-[20%] border-[#51687F] opacity-[70%] border-b-4 border-l-4 bottom-5 left-5"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          ></div>
        </motion.div>
      </div>
      <p className="text-justify mt-5 mb-2 w-11/12 m-auto">{chaton.cha_desc}</p>
    </div>
  );
};

export default CatCard;
