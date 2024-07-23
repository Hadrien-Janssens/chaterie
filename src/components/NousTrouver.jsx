import Button from "./Button";

const NousTrouver = () => {
  return (
    <div className="flex bg-[#51687F] max-w-[500px] mx-auto mt-12 p-3 items- justify-between relative">
      <div className="basis-[50%] grow">
        <h3 className="text-[#B38D7D] text-2xl font-bold  ">Nous trouver</h3>
        <p className="text-white py-2">
          Rue joseph Wauters 81, <br />
          Morlanwelz 7140
        </p>
        <a href="https://www.google.com/maps/place/Rue+Joseph+Wauters+81,+7140+Morlanwelz/@50.4548434,4.2470135,17z/data=!3m1!4b1!4m6!3m5!1s0x47c2374ae79c3e87:0xc75b43b16bf7a9ef!8m2!3d50.4548434!4d4.2470135!16s%2Fg%2F11flg321m3?entry=ttu">
          <Button>maps</Button>
        </a>
      </div>
      <div className="flex justify-end basis-[40%]">
        <a href="https://www.google.com/maps/place/Rue+Joseph+Wauters+81,+7140+Morlanwelz/@50.4548434,4.2470135,17z/data=!3m1!4b1!4m6!3m5!1s0x47c2374ae79c3e87:0xc75b43b16bf7a9ef!8m2!3d50.4548434!4d4.2470135!16s%2Fg%2F11flg321m3?entry=ttu">
          <img src={"/maps.png"} alt="carte géographique" className=" " />
        </a>
      </div>
      <div className=" absolute w-full h-full bg-[#837067] opacity-[40%] -z-10 -bottom-3 -left-3"></div>
    </div>
  );
};

export default NousTrouver;
