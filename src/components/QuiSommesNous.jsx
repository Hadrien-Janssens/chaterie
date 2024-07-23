import { NavLink } from "react-router-dom";
import Button from "./Button";

const QuiSommesNous = () => {
  return (
    <div className=" mt-10 max-w-[500px] grow mx-auto ">
      <div className="bg-[#51687F] p-3 sm:p-5 relative">
        <div className="bg-[#837067] opacity-[40%] h-32 w-32 absolute -top-2 -left-2 -z-10"></div>
        <h3 className="text-[#B38D7D] text-2xl font-bold  ">
          Qui sommes-nous ?
        </h3>
        <p className="text-white">
          Nous sommes un élevage familial où passion, dévouement et amour des
          félins font partie intégrante de nos valeurs. Un foyer chaleureux où
          les chats grandissent heureux et équilibrés, prêts à devenir le
          compagnon idéal pour votre famille. Avec un attachement particulier
          pour les Scottish et les British, c’est tout naturellement que nous
          nous sommes tourné vers cette race pour notre élevage
        </p>
        <div className="flex justify-end">
          <NavLink to={"/elevage/#"}>
            <Button>Découvrir</Button>
          </NavLink>
        </div>{" "}
        <div className="bg-[#837067] opacity-[40%] h-32 w-32 absolute -bottom-2 -right-2 -z-10"></div>
      </div>
    </div>
  );
};

export default QuiSommesNous;
