import React from "react";
import Image from "next/image";
import Logo from "@/app/components/imgs/logo.png";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { TbCertificate2 } from "react-icons/tb";

function Navbar() {
  return (
    <div className="bg-white fixed z-10 w-full h-20 py-4 px-32 flex items-center justify-between shadow-2xl">
      <Link href={"/"} className="flex items-center gap-2">
        <Image className="w-12 h-12" src={Logo} alt="IT House logo" />
        <h1 className="text-3xl font-semibold text-black max-md:flex-none">
          IT HOUSE
        </h1>
      </Link>
      <a href="#" className="flex items-center gap-2 max-md:flex-none">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Bosh sahifa
        </h1>
      </a>
      <a href="#mentors" className="flex items-center gap-2 max-md:flex-none">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Mentorlar
        </h1>
      </a>
      <a href="#courses" className="flex items-center gap-2 max-md:flex-none">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Kurslar
        </h1>
      </a>
      <a href="#contact" className="flex items-center gap-2 max-md:flex-none">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Aloqa
        </h1>
      </a>
      <div className="flex items-center gap-3 max-md:hidden">
        <Link
          href={"https://bilgi.uz/uz/educational-centers/it/it-house-edu/"}
          className="bg-indigo-600 text-white text-sm rounded-lg px-3 py-2"
        >
          Muddatli To'lov
        </Link>
        <Link
          href={"https://ithouseid.uz/"}
          className="bg-gray-500 text-white text-sm rounded-lg px-3 py-2 flex items-center gap-2 max-md:flex-none"
        >
          <TbCertificate2 /> Sertifikat
        </Link>
        <Link
          href={"https://it-house-edu.vercel.app/"}
          className="bg-red-500 text-white text-sm rounded-lg px-3 py-2 flex items-center gap-2"
        >
          <RiComputerLine /> Online
        </Link>
      </div>
      <div className="flex items-center gap-3 max-md:flex">
        <Link
          href={"https://bilgi.uz/uz/educational-centers/it/it-house-edu/"}
          className="bg-indigo-600 text-white text-sm rounded-lg px-3 py-2"
        >
          Muddatli To'lov
        </Link>
        <Link
          href={"https://it-house-edu.vercel.app/"}
          className="bg-red-500 text-white text-sm rounded-lg px-3 py-2 flex items-center gap-2"
        >
          <RiComputerLine /> Online
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
