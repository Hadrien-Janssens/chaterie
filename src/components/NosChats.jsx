import { NavLink } from "react-router-dom";
import TitleSection from "./TitleSection";
import Button from "./Button";

const NosChats = () => {
  return (
    <div className="max-w-[500px] grow mx-auto my-5 w-full">
      <TitleSection title="Nos chats" />
      <div className="flex w-11/12 m-auto pt-3 justify-between">
        <div className="basis-[50%] text-center border-l-2 border-b-2 border-[#B38D7D] opacity-[100%] pb-3 ">
          <div className="overflow-hidden max-h-[200px] flex items-center justify-center z-50">
            <img
              src={"/chatons.png"}
              alt="dessin d'un chat"
              className="relative top-8 h-[150px]"
            ></img>
          </div>

          <h4 className="font-bold pb-1">
            Nos <br />
            chatons
          </h4>

          <div className="flex justify-center">
            <NavLink to={"/chatons"}>
              <Button>Découvrir</Button>
            </NavLink>
          </div>
        </div>
        <div className="basis-[50%] text-center border-t-2 border-r-2 border-[#B38D7D] opacity-[100%] pb-3 -z-50">
          <div className="overflow-hidden max-h-[200px] flex items-center justify-center ">
            <img
              src={"/reproducteurs.png"}
              alt="dessin d'un chat"
              className="relative h-[150px]"
            ></img>
          </div>
          <h4 className="font-bold pb-1">
            Nos <br /> reproducteurs
          </h4>
          <div className="flex justify-center">
            <NavLink to={"/reproducteurs"}>
              <Button>Découvrir</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosChats;
