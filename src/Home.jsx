import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NousTrouver from "./components/NousTrouver";
import QuiSommesNous from "./components/QuiSommesNous";
import NosChats from "./components/NosChats";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden">
        {/* HEADER  */}
        <div className="flex w-full relative -left-8 gap-7   md:static">
          <img
            src={"/urban.jpeg"}
            alt="british black silver"
            className="w-[250px] sm:w-[350px] md:w-[400px] "
          ></img>
          <div className="grow self-end relative -top-5 -left-12 md:-top-40">
            <div className=" relative -top-10 left-20 italic text-xs ">
              <div className="relative">
                <p className="cursive text-3xl ">Voici Urban</p>
                <img
                  src="/Group2.png"
                  alt=""
                  className="absolute -left-[115px] -top-[25px] w-[110px]"
                />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-[#B38D7D] opacity-[70%] sm:text-6xl md:text-6xl">
              Janssens <br />
              Family
            </h1>
            <h2 className="font-poetsenone text-[#6E645F] opacity-[60%]">
              Elevage de <br />
              Scottish & British
            </h2>
          </div>
        </div>

        <div className="p-5 flex flex-wrap items-center gap-10">
          {/* QUI SOMMES NOUS ?  */}
          <QuiSommesNous />
          {/* NOS CHATS  */}
          <NosChats />
        </div>
        {/* NOS PRODUITS  */}
        {/* <NosProduits /> */}
        {/* CONTACT  */}
        <div className="p-5 flex flex-wrap items-center gap-10">
          <Contact />
          {/* NOUS TROUVER  */}
          <NousTrouver />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
