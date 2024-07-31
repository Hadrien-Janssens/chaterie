import TitleSection from "./components/TitleSection";
import Button from "./components/Button";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Nav />
      <div className="mx-5 text-justify max-w-[800px] md:mx-auto">
        <div className="relative my-10">
          <TitleSection title="Qui sommes-nous?" />
          {/* <div className="h-1 w-1/2 absolute -top-5 bg-[#51687F] opacity-[70%] "></div>
          <div className="h-1 w-1/2 absolute -bottom-5 right-0 bg-[#51687F] opacity-[70%] "></div> */}
          <img
            src="/reproducteurs.png"
            className=" absolute -bottom-8 right-6 z-10 w-[100px]"
          />
        </div>
        <p className="mt-5">
          Bienvenue chez nous, Laura et Hadrien, un jeune couple passionné de
          chats, situé au cœur du Hainaut, à Morlanwelz. Nous avons
          respectivement 28 et 30 ans et partageons notre amour pour les félins
          depuis de nombreuses années.
        </p>
        <figure className="w-full flex justify-center my-10">
          <img
            src={"/hadrien-laura.jpg"}
            width={300}
            height={300}
            alt="photo portrait du couple d'eleveur Hadrien(gauche) Laura(droite)"
          />
        </figure>
        <div className="relative p-5">
          <p>
            Mariés depuis 6 ans, les chats font partie intégrante de notre vie.
            Nous avons toujours été entourés de ces adorables compagnons à
            quatre pattes, considérés comme des membres à part entière de notre
            famille. En 2023, nous avons décidé d'agrandir notre tribu en
            accueillant Una et Urban, une scottish fold et un british shorthair
            qui ont rapidement trouvé leur place parmi nous.
          </p>
          <br />
          <p>
            Pour nous, l'élevage est une véritable passion que nous chérissons
            chaque jour. Nous chats sont élevés au sein d'un foyer familial, ce
            qui les rend plus sociables et amitieux. Avec notre fille, âgée de 3
            ans, ils ont également l’habitude de vivre en présence d'enfants, et
            nous avons constaté que nos chats s'épanouissent également en sa
            compagnie.
          </p>
          <br />
          <p>
            Si vous recherchez un compagnon félin aimant et bien élevé, nous
            sommes là pour vous guider et vous aider à trouver le compagnon
            idéal qui correspondra à vos besoins et à votre style de vie.
          </p>
          <br />
          <p>
            N'hésitez pas à nous contacter pour découvrir notre élevage
            familial, où passion, dévouement et amour des chats sont les
            maîtres-mots.
          </p>
          <div className="absolute border-[#B38D7D] opacity-[67%] border-b-4 border-l-4 w-32 h-1/2 -bottom-3 -left-3"></div>
          <div className="absolute border-[#B38D7D] opacity-[67%] border-t-4 border-r-4 w-32 h-1/2 -top-3 -right-3"></div>
        </div>
        <div className="relative pr-16 w-full flex justify-end items-center gap-5">
          <img src="/pattes.png" alt="" />
          <p className="cursive text-3xl">
            Janssens <br />
            Family
          </p>
        </div>
        <div className="my-10 mt-24 ">
          <TitleSection title="Nos conseils pour acceuillir votre chaton" />
          {/* <div className="h-1 w-1/2 absolute -top-5 bg-[#51687F] opacity-[70%] "></div>
          <div className="h-1 w-1/2 absolute -bottom-5 right-0 bg-[#51687F] opacity-[70%] "></div> */}
        </div>
        <div className="p-3 bg-[#97918D] text-white relative my-16 mt-10">
          <p>
            Afin que votre nouveau petit protégé ait le temps de s’adapter à
            vous lors de son arrivée, nous vous conseillons de venir le chercher
            le plus tôt possible dans la journée. Cela lui évitera de se
            retrouver immédiatement tout seul pendant la nuit. Il aura ainsi le
            temps de s’habituer à son nouvel environnement mais aussi à sa
            nouvelle famille.
          </p>
          <div className="flex justify-end text-black">
            <Button>Lire plus</Button>
          </div>
          {/* <div className="absolute w-1/2 h-1/2 border-4 -z-10 -top-3 -right-3  border-[#B38D7D] opacity-[63%]"></div>
          <div className="absolute w-1/2 h-1/2 border-4 -z-10 -bottom-3 -left-3  border-[#B38D7D] opacity-[63%]"></div> */}
          <img
            src="/chat-qui-marche.png"
            className=" absolute -top-[62px] right-5 z-10 w-[70px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
