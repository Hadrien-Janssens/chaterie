import { CgGenderMale } from "react-icons/cg";

import Button from "./Button";
const CatCard = () => {
  return (
    <div className="bg-[#F4F4F4]  p-7 relative">
      <div className="flex justify-center gap-10">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-5 relative  m-auto">
            <div className="relative z-10">
              <img
                className="object-cover h-[150px] w-[150px] shadow-md"
                src="/urban.jpeg"
                alt="claire"
              />
              <div className="absolute -top-2 -left-2 bg-white w-[100px] h-[100px] -z-10"></div>
              <div className="absolute -bottom-2 -right-2 bg-white  w-[100px] h-[100px] -z-10"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <h3 className="text-[#837067] opacity-[60%] font-extrabold text-lg font-poetsenone">
            <div className="flex items-center gap-1 mt-5">
              Vanille
              <CgGenderMale className="text-2xl" />
            </div>
          </h3>
          <p className="font-medium mb-6">né le 05/07/2024</p>
          <Button>Voir plus</Button>

          <div className="absolute w-[20%] h-[20%] border-[#B38D7D] border-t-4 border-r-4 top-5 right-5"></div>
          <div className="absolute w-[20%] h-[20%] border-[#B38D7D] border-b-4 border-r-4 bottom-5 right-5"></div>
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
