const CardProduct = ({ url, name, desc }) => {
  return (
    <div className="shadow-md rounded-3xl p-3 px-3 min-w-36">
      <img src={url} alt={name} className="w-[100px]" />
      <p className="text-sm font-bold">{name}</p>
      <p className="text-gray-600 text-xs">{desc}</p>
    </div>
  );
};

export default CardProduct;
