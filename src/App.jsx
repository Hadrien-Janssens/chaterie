import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Elevage from "./Elevage";
import Chatons from "./Chatons";
import Reproducteurs from "./Reproducteurs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/elevage" element={<Elevage />}></Route>
          <Route path="/chatons" element={<Chatons />}></Route>
          <Route path="/reproducteurs" element={<Reproducteurs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
