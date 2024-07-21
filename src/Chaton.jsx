import { useParams } from "react-router-dom";
import CatCard from "./components/CatCard";
import CatCardReverse from "./components/CatCardReverse";

const Chaton = ({ chatons }) => {
  const { id } = useParams();
  const chaton = chatons.find((c) => c.id == id);

  return (
    <div>
      {id % 2 == 0 ? (
        <CatCardReverse chaton={chaton} />
      ) : (
        <CatCard chaton={chaton} />
      )}
    </div>
  );
};

export default Chaton;
