import React from "react";
import Nav from "./components/Nav";
import Button from "./components/Button";
import TitleSection from "./components/TitleSection";
import CardProduct from "./components/CardProduct";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden">
        {/* HEADER  */}
        <div className="flex w-full relative -left-8 gap-7">
          <img
            src={"/urban.jpeg"}
            alt="british black silver"
            className="w-[250px]"
          ></img>
          <div className="grow self-end relative -top-5 -left-12">
            <div className=" relative -top-10 left-20 italic text-xs">
              <div className="relative">
                <p>Voici Urban</p>
                <img
                  src="/Group2.png"
                  alt=""
                  className="absolute -left-[115px] -top-[25px] w-[110px]"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#B38D7D] opacity-[70%]">
              Janssens Family
            </h1>
            <h2 className="font-poetsenone text-[#6E645F] opacity-[60%]">
              Elevage de <br />
              Scottish & British
            </h2>
          </div>
        </div>

        {/* QUI SOMMES NOUS ?  */}
        <div className="m-5 mt-10">
          <div className="bg-[#51687F] p-3 relative">
            <div className="bg-[#837067] opacity-[40%] h-32 w-32 absolute -top-2 -left-2 -z-10"></div>
            <h3 className="text-[#B38D7D] text-2xl font-bold  ">
              Qui sommes-nous ?
            </h3>
            <p className="text-white">
              Nous sommes un élevage familial où passion, dévouement et amour
              des félins font partie intégrante de nos valeurs. Un foyer
              chaleureux où les chats grandissent heureux et équilibrés, prêts à
              devenir le compagnon idéal pour votre famille. Avec un attachement
              particulier pour les Scottish et les British, c’est tout
              naturellement que nous nous sommes tourné vers cette race pour
              notre élevage
            </p>
            <div className="flex justify-end">
              <NavLink to={"/elevage"}>
                <Button>Découvrir</Button>
              </NavLink>
            </div>{" "}
            <div className="bg-[#837067] opacity-[40%] h-32 w-32 absolute -bottom-2 -right-2 -z-10"></div>
          </div>
        </div>
        {/* NOS CHATS  */}
        <div className="m-5 ">
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
        {/* NOS PRODUITS  */}
        {/* <div className="m-5 my-10">
          <TitleSection title="Nos produits" />
          <div className="flex gap-6 ">
            <CardProduct
              url={"/ressor.png"}
              name={"Jouet ressort"}
              desc={"Jeux pour chat"}
            />
            <CardProduct
              url={"/ressor.png"}
              name={"Jouet ressort"}
              desc={"Jeux pour chat"}
            />
            <CardProduct
              url={"/ressor.png"}
              name={"Jouet ressort"}
              desc={"Jeux pour chat"}
            />
          </div>
          <div className="flex justify-end p-5">
            <Button>Boutique</Button>
          </div>
        </div> */}
        {/* CONTACT  */}
        <div className="m-5 relative mt-20">
          <img
            src={"/chat-rogolo.png"}
            width={150}
            height={150}
            alt="dessin de chat rigolo"
            className="absolute -top-16"
          />
          <div className="bg-[#97918D] p-3 relative">
            <div className="absolute border-[#B38D7D] opacity-[67%] border-b-4 border-l-4 w-32 h-full -bottom-3 -left-3"></div>
            <h3 className="text-white text-2xl font-bold mb-3">
              Contactez-nous
            </h3>
            <form
              action=""
              className="flex flex-col gap-3 w-10/12 m-auto text-white"
            >
              <div className="flex justify-between">
                <label htmlFor="name">Nom & Prénom</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="flex justify-between">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="flex justify-between">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <div className="text-black">
                <Button>Envoyer</Button>
              </div>
            </form>
            <div className="absolute border-[#B38D7D] opacity-[67%] border-t-4 border-r-4 w-32 h-full -top-3 -right-3"></div>
          </div>
        </div>
        {/* NOUS TROUVER  */}
        <div className="flex bg-[#51687F] m-5 mt-12 p-3 items- justify-between relative">
          <div className="basis-[50%] grow">
            <h3 className="text-[#B38D7D] text-2xl font-bold  ">
              Nous trouver
            </h3>
            <p className="text-white py-2">
              Rue joseph Wauters 81, <br />
              Morlanwelz 7140
            </p>
            <Button>maps</Button>
          </div>
          <div className="flex justify-end basis-[40%]">
            <img src={"/maps.png"} alt="carte géographique" className=" " />
          </div>
          <div className=" absolute w-full h-full bg-[#837067] opacity-[40%] -z-10 -bottom-3 -left-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
