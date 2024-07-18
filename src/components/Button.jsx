import { MdArrowOutward } from "react-icons/md";

const Button = ({ children }) => {
  return (
    <button className="rounded-full bg-white px-1 pl-4 py-1 border border-[#B38D7D] flex items-center gap-2 ">
      {children}
      <div className="rounded-full bg-[#B38D7D] p-1">
        <MdArrowOutward className="text-white" />
      </div>
    </button>
  );
};

export default Button;
