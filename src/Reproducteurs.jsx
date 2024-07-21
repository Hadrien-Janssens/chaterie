import Button from "./components/Button";
import Nav from "./components/Nav";

const Reproducteurs = () => {
  return (
    <div>
      <Nav />

      <h1 className="mb-20 text-center text-xl">Nos reproducteurs</h1>
      {/* LEFT  */}
      <div className="flex mx-2 gap-5">
        <div className="basis-1/2 shrink-0 text-center flex flex-col gap-1 items-center">
          <h2>Una</h2>
          <p>née le 26/09/2024</p>
          <Button>plus de photos</Button>
          <img src="/Group.png" alt="" />
        </div>
        <div className="flex justify-center">
          <div className="relative w-10/12">
            <img src="/una.jpeg" alt="scottish fold (Una)" className="" />
            <div className="absolute bg-[#837067] opacity-[40%] w-2/3 h-2/3 -z-10 -top-2 -left-2"></div>
            <div className="absolute bg-[#837067] opacity-[40%] w-2/3 h-2/3 -z-10 -bottom-2 -right-2"></div>
          </div>
        </div>
      </div>
      <div className="mx-3 bg-[#51687F] text-white py-3 px-6 text-justify my-20">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
        </p>
      </div>
    </div>
  );
};

export default Reproducteurs;
