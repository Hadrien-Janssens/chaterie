import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Elevage from "./Elevage";
import Chatons from "./Chatons";
import Reproducteurs from "./Reproducteurs";
import Chaton from "./Chaton";
import useFetchAllCats from "./hooks/useFetchAllCats";

function App() {
  const chatons = [
    {
      id: 1,
      name: "rose",
      desc: "Très bavarde",
      portee: "lardon",
      img: [
        { url: "/una.jpeg" },
        { url: "/hadrien-laura.jpg" },
        { url: "/urban.jpeg" },
        { url: "/chatons.png" },
      ],
    },
    { id: 2, name: "claire", desc: "l'outsider", portee: "lardon" },
    { id: 3, name: "blue", desc: "le buldozer", portee: "lardon" },
    { id: 4, name: "berrie", desc: "l'endormi", portee: "lardon" },
    {
      id: 5,
      name: "voldy",
      desc: "il controle les forces du mal",
      portee: "lardon",
    },
    { id: 6, name: "roucky", desc: "l'adventurous", portee: "lardon" },
  ];

  const { cats, loading, error } = useFetchAllCats();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/elevage" element={<Elevage />}></Route>
          <Route path="/chatons" element={<Chatons chatons={cats} />}></Route>
          <Route path="/reproducteurs" element={<Reproducteurs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
