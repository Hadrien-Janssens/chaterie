import Nav from "./components/Nav";
import CatCard from "./components/CatCard";
import CatCardReverse from "./components/CatCardReverse";
import Footer from "./components/Footer";

const Chatons = () => {
  return (
    <div>
      <Nav />
      <h1>Chatons disponible à l'adoption</h1>
      <CatCard />
      <CatCardReverse />
      <CatCard />
      <CatCardReverse />
      <div className="m-10">
        <div className=" text-justify">
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
        </div>
        {/* RESERVATION  */}
        <div className="mt-5 ">
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
