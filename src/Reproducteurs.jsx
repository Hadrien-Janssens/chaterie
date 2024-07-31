import Button from "./components/Button";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";

const Reproducteurs = () => {
  return (
    <>
      <Nav />
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-[#837067] opacity-[60%] text-2xl m-5 my-10 mt-7">
          Nos reproducteurs
        </h1>
        <div className="flex mx-2 gap-0 ">
          <div className="basis-1/2 shrink-0 text-center flex flex-col gap-1 items-center">
            <div className="flex items-center text-3xl gap-3">
              <h2 className="yellowtail ">Una</h2>
              <CgGenderFemale />
            </div>
            <p>née le 26/09/2024</p>
            <Button>plus de photos</Button>
            <img src="/Group.png" alt="" />
          </div>
          <div className="flex justify-center">
            <div className="relative shrink-0 w-[200px] h-[200px]">
              <img
                src="/una.png"
                alt="scottish fold (Una)"
                className="object-cover h-full w-full"
              />
              <div className="absolute bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10 -top-2 -left-2"></div>
              <div className="absolute bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10 -bottom-2 -right-2"></div>
            </div>
          </div>
        </div>
        <div className="mx-3 bg-[#51687F] text-white py-3 px-6 text-justify my-20 relative">
          <img
            src="/chat-rogolo.png "
            alt=""
            className="absolute -top-20 -left-5 -z-10 -scale-2"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto bg-[#F4F4F4] p-10">
        <div className="flex flex-row-reverse mx- gap-0 ">
          <div className="basis-1/2 shrink-0 text-center flex flex-col gap-1 items-center mt-">
            <div className=" w-24">
              <img
                src="/Group-urban.png"
                alt=""
                className="relative -left-8 top-8"
              />

              <div className="flex items-center gap-3 text-3xl">
                <h2 className="yellowtail">Urban</h2>
                <CgGenderMale />
              </div>
            </div>
            <p className="mb-3">née le 26/09/2024</p>

            <Button>plus de photos</Button>
          </div>
          <div className="flex justify-center">
            <div className="relative shrink-0 w-[200px] h-[200px]">
              <img
                src="/urban.jpeg"
                alt="scottish fold (Una)"
                className="object-cover h-full w-full"
              />
              <div className="absolute bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10 -top-2 -left-2"></div>
              <div className="absolute bg-[#837067] opacity-[40%] w-[100px] h-[100px] -z-10 -bottom-2 -right-2"></div>
            </div>
          </div>
        </div>

        <div className="relative my-10">
          <p className="text-justify p-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className="absolute border-[#B38D7D] opacity-[67%] border-b-4 border-l-4 w-32 h-1/2 -bottom-3 -left-3"></div>
          <div className="absolute border-[#B38D7D] opacity-[67%] border-t-4 border-r-4 w-32 h-1/2 -top-3 -right-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reproducteurs;
