import Nav from "./components/Nav";
import CatCard from "./components/CatCard";
import CatCardReverse from "./components/CatCardReverse";
import Footer from "./components/Footer";

const Chatons = () => {
  return (
    <div>
      <Nav />
      <div className="relative ">
        <h1 className="text-[#837067] opacity-[60%] text-2xl m-5 my-10">
          Chatons disponible à l'adoption
        </h1>
        <div className="h-1 w-1/2 absolute -top-5 bg-[#51687F] opacity-[70%] "></div>
        <div className="h-1 w-1/2 absolute -bottom-5 right-0 bg-[#51687F] opacity-[70%] "></div>
        <img
          src="/chatons-qui-joue.png"
          className=" absolute -bottom-5 right-5 z-10"
        />
      </div>
      <CatCard />
      <CatCardReverse />
      <CatCard />
      <CatCardReverse />
      <div className="m-5 my-10">
        <div className=" text-justify relative m-5">
          <h5 className="text-center text-2xl text-[#837067] opacity-[60%] font-extrabold mb-4">
            Conditions d'adoption
          </h5>
          <p>Tous nos chatons sont disponibles à partir de 12 semaines.</p>
          <br />
          <p>
            Ils sont vendus pucés, vaccinés, vermifugés, traités contre les
            puces/parasites et munis de leur passeport européen au prix de 900.
          </p>
          <br />
          <p>
            Le chaton partira également avec un petit kit de départ offert qui
            comprend : croquette, friandise et jeu.
          </p>
          <br />
          <p>
            Nos chatons sont élevés dans l’amour et la bienveillance. C’est pour
            cette raison que nous nous réservons le droit de lui choisir la
            meilleur des familles et nous pourront refuser une adoption si
            celle-ci ne convient pas.
          </p>
          <div className="absolute w-1/2 h-1/2 border-t-4 border-r-4 -top-5 -right-5  border-[#B38D7D] opacity-[63%]"></div>
          <div className="absolute w-1/2 h-1/2 border-b-4 border-l-4 -bottom-5 -left-5  border-[#B38D7D] opacity-[63%]"></div>
        </div>
        {/* RESERVATION  */}
        <div className="mt-10 ">
          <h4 className=" text-2xl text-[#837067] opacity-[60%] font-extrabold mb-4">
            Réservation
          </h4>
          <div className="bg-[#51687F] text-white p-5 relative shadow-md">
            <h5 className="text-[#FFA360]">
              Vous avez craqué pour un de nos chatons ?
            </h5>
            <p className="mb-3">
              Pas de panique, vous pouvez le réserver à partir de ses 6
              semaines.
            </p>
            <h5 className="text-[#FFA360]">Comment faire ?</h5>
            <p>
              Vous prenez contact avec nous afin de vérifier la disponibilité du
              chaton et nous planifions ensuite une visite si vous souhaitez le
              voir. La réservation est validée après le paiement d’un acompte de
              100 euros.
            </p>
            <div className="absolute -top-2 -left-2 w-[150px] h-[150px] bg-[#837067] opacity-[40%] -z-10"></div>
            <div className="absolute -bottom-2 -right-2 w-[150px] h-[150px] bg-[#837067] opacity-[40%] -z-10"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chatons;
