import Image from "next/image";
import Bitir from "@/app/components/imgs/Bitir.png";

function Finishes() {
  return (
    <div>
      <div id="3" className="mt-12 mb-12 bg-white w-full h-12"></div>
      <div className="px-64 max-md:px-5">
        <h1 className="text-4xl font-bold">Bizning Bitiruvchilar</h1>
        <Image
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-full mt-10"
          src={Bitir}
          alt=""
        />
      </div>
    </div>
  );
}

export default Finishes;
