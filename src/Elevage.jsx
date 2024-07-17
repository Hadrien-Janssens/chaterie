import TitleSection from "./components/TitleSection";
import Button from "./components/Button";
import Nav from "./components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <div className="m-5 text-justify">
        <TitleSection title="Qui sommes-nous?" />
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
        <p>
          Mariés depuis 6 ans, les chats font partie intégrante de notre vie.
          Nous avons toujours été entourés de ces adorables compagnons à quatre
          pattes, considérés comme des membres à part entière de notre famille.
          En 2023, nous avons décidé d'agrandir notre tribu en accueillant Una
          et Urban, une scottish fold et un british shorthair qui ont rapidement
          trouvé leur place parmi nous.
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
          sommes là pour vous guider et vous aider à trouver le compagnon idéal
          qui correspondra à vos besoins et à votre style de vie.
        </p>
        <br />
        <p>
          N'hésitez pas à nous contacter pour découvrir notre élevage familial,
          où passion, dévouement et amour des chats sont les maîtres-mots.
        </p>
        <div className="my-5">
          <TitleSection title="Nos conseils pour acceuillir votre chaton" />
        </div>
        <div className="p-3 bg-[#97918D] text-white">
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
        </div>
      </div>
    </>
  );
};

export default page;
