import { CgGenderMale } from "react-icons/cg";

import Button from "./Button";
import { NavLink } from "react-router-dom";
const CatCard = ({ chaton }) => {
  return (
    <div className="bg-white  p-7 relative">
      <div className="flex flex-row-reverse justify-center gap-10">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-5 relative  m-auto">
            <div className="relative z-10">
              <img
                className="object-cover h-[150px] w-[150px] shadow-md"
                src="/urban.jpeg"
                alt="claire"
              />
              <div className="absolute -top-2 -left-2 bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10"></div>
              <div className="absolute -bottom-2 -right-2 bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <h3 className="text-[#837067] opacity-[60%] font-extrabold text-lg font-poetsenone">
            <div className="flex items-center gap-1 mt-5">
              {chaton.name}
              <CgGenderMale className="text-2xl" />
            </div>
          </h3>
          <p className="font-medium mb-6">né le 05/07/2024</p>
          <NavLink to={`/chaton/${chaton.id}`}>
            <Button>Voir plus</Button>
          </NavLink>

          <div className="absolute w-[20%] h-[20%] border-[#51687F] opacity-[70%] border-t-4 border-l-4 top-5 left-5"></div>
          <div className="absolute w-[20%] h-[20%] border-[#51687F] opacity-[70%] border-b-4 border-l-4 bottom-5 left-5"></div>
        </div>
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
