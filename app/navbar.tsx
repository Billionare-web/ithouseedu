import React from "react";
import Image from "next/image";
import Logo from "@/app/components/imgs/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white fixed z-10 w-full h-[72px] py-4 px-32 flex items-center justify-between shadow-2xl max-md:px-5">
      <Link href={"/"} className="flex items-center gap-2">
        <Image className="w-12 h-12" src={Logo} alt="IT House logo" />
        <h1 className="text-3xl font-semibold text-black max-md:hidden">IT HOUSE</h1>
      </Link>
      <a href="#" className="flex items-center gap-2 transition-all duration-800">
        <h1 className="text-lg font-semibold text-black hover:text-red-600 max-md:hidden">
          Bosh sahifa
        </h1>
      </a>
      <a href="#1" className="flex items-center gap-2 transition-all duration-800">
        <h1 className="text-lg font-semibold text-black hover:text-red-600 max-md:hidden">
          Ma'lumotlar
        </h1>
      </a>
      <a href="#mentor" className="flex items-center gap-2 transition-all duration-800">
        <h1 className="text-lg font-semibold text-black hover:text-red-600 max-md:hidden">
          Mentor
        </h1>
      </a>
      <a href="#3" className="flex items-center gap-2 transition-all duration-800">
        <h1 className="text-lg font-semibold text-black hover:text-red-600 max-md:hidden">
          Bitiruvchilar
        </h1>
      </a>
      <a href="#contact" className="flex items-center gap-2">
        <button className="font-bold text-sm bg-red-600 rounded-lg px-3 py-2 text-white hover:px-4 hover:py-3 transition-all duration-500">
          So'rov qoldiring
        </button>
      </a>
    </div>
  );
}

export default Navbar;
