import { useRef, useState, useEffect } from "react";
import { juices } from "./juicedata";
import Juice from "./juice";

function Products() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -448, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 448, behavior: "smooth" });
  };

  const updateCenterIndex = () => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const children = Array.from(container.children);

    const centerChildIndex = children.reduce((closestIndex, child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;

      const closestDistance = Math.abs(
        children[closestIndex].getBoundingClientRect().left +
          children[closestIndex].getBoundingClientRect().width / 2 -
          containerCenter
      );
      const currentDistance = Math.abs(childCenter - containerCenter);

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    setCenterIndex(centerChildIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    updateCenterIndex();

    const handleScroll = () => {
      updateCenterIndex();
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center space-x-3 p-10">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="p-5 bg-[#fcfbfc] rounded-full hover:bg-gray-100"
      >
        <img src="/public/icons8-left-48.png" alt="" />
      </button>

      <div
        ref={containerRef}
        className="hide-scrollbar flex gap-16 w-[1280px] h-[550px] items-center  overflow-x-auto hideScrollBar snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth", scrollbarGutter: "stable" }}
      >
        {juices.map((juice, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === centerIndex
                ? "scale-110 rotate-0"
                : "scale-90 rotate-y-12"
            }`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <Juice imgSrc={juice.imgSrc} discription={juice.discription} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="p-5 bg-[#fcfbfc] rounded-full hover:bg-gray-100"
      >
        <img src="/icons8-right-48.png" alt="" />
      </button>
    </div>
  );
}

export default Products;
