function Juice({ imgSrc, discription }) {
  return (
    <div className="w-96 bg-[rgb(152,33,134)] bg-opacity-35 rounded-lg p-2 flex-shrink-0  hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-150">
      <div className="flex items-center justify-center">
        <img className="h-96 xs:h-60 rounded-lg object-cover" src={imgSrc} alt="" />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-md text-center xs:text-[12px] sm:text-[13px]">{discription}</p>
      </div>
    </div>
  );
}

export default Juice;
