import { CgGenderMale } from "react-icons/cg";

import Button from "./Button";
const CatCard = () => {
  return (
    <div className="bg-white flex flex-row-reverse p-10 gap-3">
      <div className="basis-[50%] grow shrink-0">
        <div className="flex flex-col justify-center items-center gap-5 relative  m-auto">
          <div className="relative z-10">
            <img
              className="object-cover h-[150px] w-[150px] shadow-md"
              src="/urban.jpeg"
              alt="claire"
            />
            <div className="absolute -top-2 -left-2 bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10"></div>
            <div className="absolute -bottom-2 -right-2 bg-[#837067] opacity-[40%]  w-[100px] h-[100px] -z-10"></div>
          </div>
          <Button>Voir plus</Button>
        </div>
      </div>
      <div className="relative">
        <h3 className="text-[#837067] opacity-[60%] font-extrabold text-lg font-poetsenone">
          <div className="flex items-center gap-1">
            Vanille
            <CgGenderMale className="text-2xl" />
          </div>
        </h3>
        <p className="font-medium">né le 05/07/2024</p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
        </p>
        <div className="absolute w-[40%] h-[40%] border-[#51687F] opacity-[70%] border-t-4 border-l-4 -top-5 -left-5"></div>
        <div className="absolute w-[40%] h-[40%] border-[#51687F] opacity-[70%] border-b-4 border-l-4 -bottom-5 -left-5"></div>
      </div>
    </div>
  );
};

export default CatCard;
