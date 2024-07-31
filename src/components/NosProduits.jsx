import TitleSection from "./TitleSection";
import CardProduct from "./CardProduct";
import Button from "./Button";

const NosProduits = () => {
  return (
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
  );
};

export default NosProduits;
