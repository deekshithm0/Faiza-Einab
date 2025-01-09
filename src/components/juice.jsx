function Juice({ imgSrc, discription }) {
  return (
    <div className="w-96  bg-[rgb(98,25,87)] bg-opacity-85 rounded-lg p-2 flex-shrink-0  hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-150">
      <div className="flex items-center justify-center">
        <img className="h-96  rounded-lg object-cover" src={imgSrc} alt="" />
      </div>
      <div className="bg-white p-4 rounded-lg xs:text-[12px] sm:text-[14px] md:text-[16]">
        <p className="text-md text-center">{discription}</p>
      </div>
    </div>
  );
}

export default Juice;
