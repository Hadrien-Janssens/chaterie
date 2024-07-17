import Nav from "./components/Nav";
import CatCard from "./components/CatCard";

const Chatons = () => {
  return (
    <div>
      <Nav />
      <h1>Chatons disponible à l'adoption</h1>
      <CatCard />
      <CatCard />
      <CatCard />
    </div>
  );
};

export default Chatons;
