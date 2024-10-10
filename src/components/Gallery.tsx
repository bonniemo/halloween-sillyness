import { useState } from "react";
import church from "../assets/3.png";
import circus from "../assets/circus.png";
import dollattic from "../assets/dollattic.png";
import green from "../assets/green.png";
import lady from "../assets/lady-nobg.png";
import library from "../assets/library.png";
import lighthousestair from "../assets/lighthouse-light.png";
import lighthouse from "../assets/lighthouse.png";
import maze from "../assets/maze.png";
import town from "../assets/town.png";

const Gallery = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  return (
    <section className="grid grid-cols-9 grid-rows-12 gap-2 w-[35rem] relative">
      <div className="col-start-2 col-end-8 row-start-3 row-end-9 relative z-10">
        <img
          src={lady}
          alt=""
          className={`w-full h-full transform transition-all duration-1000 ease-in-out ${
            isOpaque ? "opacity-0" : "opacity-80"
          } hover:translate-y-[-10px] hover:scale-110`}
          onClick={() => setIsOpaque(!isOpaque)}
        />
      </div>
      <div className="col-start-1 col-span-3 row-start-1 row-end-4">
        <img
          src={church}
          alt="abandoned Victorian living room with rocking chair and porcelain doll"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-4 col-span-3 row-start-1 row-end-3">
        <img
          src={circus}
          alt="tattered abandoned carnival tent with lurking shadows"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-7 col-span-2 row-start-1 row-end-5">
        <img
          src={dollattic}
          alt="dark attic with eerie dollhouse and broken toys"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-1 col-span-3 row-start-4 row-end-8">
        <img
          src={green}
          alt="forgotten garden with eerie stone statues covered in moss"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-4 col-span-3 row-start-3 row-end-7">
        <img
          src={library}
          alt="dusty library with floating candles casting eerie shadows"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-7 col-span-2 row-start-5 row-end-9">
        <img
          src={lighthouse}
          alt="abandoned lighthouse on a stormy night with eerie green glow"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-1 col-span-3 row-start-8 row-end-12">
        <img
          src={lighthousestair}
          alt="interior of abandoned lighthouse with spiral staircase and strange plants"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-4 col-span-3 row-start-7 row-end-12">
        <img
          src={maze}
          alt="dark overgrown garden maze at night with faint glimmer of fireflies"
          className="w-full h-full"
        />
      </div>
      <div className="col-start-7 col-span-2 row-start-9 row-end-12">
        <img
          src={town}
          alt="shadowy alleyway in an old cobblestoned town with flickering gas lamps"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Gallery;
