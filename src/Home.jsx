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
        <div className="flex w-full ">
          <img
            src={"/urban.jpeg"}
            alt="british black silver"
            className="w-[300px]"
          ></img>
          <div className="grow self-end relative -top-5">
            <div className=" relative -top-10 left-24 italic text-xs">
              <p>Voici Urban</p>
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
        <div className="m-5">
          <TitleSection title="Nos chats" />
          <div className="flex w-11/12 m-auto pt-3 justify-between">
            <div className="basis-[50%] text-center border-l-2 border-b-2 border-[#B38D7D] opacity-[67%] pb-3">
              <div className="overflow-hidden max-h-[200px]">
                <img
                  src={"/chatons.png"}
                  alt="dessin d'un chat"
                  className="relative top-5 -left-5"
                ></img>
              </div>

              <h4 className="font-bold pb-1">Nos chatons</h4>

              <div className="flex justify-center">
                <NavLink to={"/chatons"}>
                  <Button>Découvrir</Button>
                </NavLink>
              </div>
            </div>
            <div className="basis-[50%] text-center border-t-2 border-r-2 border-[#B38D7D] opacity-[67%] pb-3">
              <div className="overflow-hidden max-h-[200px]">
                <img
                  src={"/chatons.png"}
                  alt="dessin d'un chat"
                  className="relative top-5 -left-5"
                ></img>
              </div>
              <h4 className="font-bold pb-1">Nos reproducteurs</h4>
              <div className="flex justify-center">
                <NavLink to={"/reproducteurs"}>
                  <Button>Découvrir</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* NOS PRODUITS  */}
        <div className="m-5 my-10">
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
        </div>
        {/* CONTACT  */}
        <div className="m-5 relative ">
          <img
            src={"/chat-rigolo.png"}
            width={150}
            height={150}
            alt="dessin de chat rigolo"
            className="absolute -top-20"
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
          <div className="basis-[70%]">
            <h3 className="text-[#B38D7D] text-2xl font-bold  ">
              Nous trouver
            </h3>
            <p className="text-white">
              Rue joseph Wauters 81, <br />
              Morlanwelz 7140
            </p>
            <Button>maps</Button>
          </div>
          <div className="flex justify-end">
            <img
              src={"/maps.png"}
              alt="carte géographique"
              className=" w-1/2"
            />
          </div>
          <div className=" absolute w-full h-full bg-[#837067] opacity-[40%] -z-10 -bottom-3 -left-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
