import { MdArrowOutward } from "react-icons/md";

const Button = ({ children, onClick, onSubmit }) => {
  return (
    <button
      className="rounded-full bg-white px-1 pl-4 py-1 border border-[#B38D7D] flex items-center gap-2 group hover:bg-[#B38D7D] duration-200 hover:text-white hover:shadow-lg hover:scale-[1.05] "
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
      <div className="rounded-full bg-[#B38D7D] p-1 group-hover:bg-white duration-150 ">
        <MdArrowOutward className="text-white group-hover:text-[#B38D7D] group-hover:rotate-[405deg] duration-500" />
      </div>
    </button>
  );
};

export default Button;
