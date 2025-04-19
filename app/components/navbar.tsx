import React from "react";
import Image from "next/image";
import Logo from "@/app/components/imgs/logo.png";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { TbCertificate2 } from "react-icons/tb";

function Navbar() {
  return (
    <div className="bg-white fixed z-10 w-full h-20 py-4 max-md:px-5 px-32 flex items-center justify-between shadow-2xl">
      <Link href={"/"} className="flex items-center gap-2">
        <Image className="w-12 h-12" src={Logo} alt="IT House logo" />
        <h1 className="text-3xl font-semibold text-black max-md:hidden">
          IT HOUSE
        </h1>
      </Link>
      <a href="#" className="flex items-center gap-2 max-md:hidden">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Bosh sahifa
        </h1>
      </a>
      <div className="relative group max-md:hidden">
        <a href="#courses" className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-black group-hover:text-red-600">
            Kurslar
          </h1>
        </a>

        {/* Modal yoki dropdown */}
        <div className="absolute top-full left-0 w-[450px] h-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-50">
          <ul className="p-2 space-y-2 text-gray-700 flex gap-5 text-lg">
            <div>
              <li>
                <a href="/foundation" className="block hover:text-red-500">
                  Foundation
                </a>
              </li>
              <li>
                <a href="/kids" className="block hover:text-red-500 mt-2">
                  Foundation Kids
                </a>
              </li>
              <li>
                <a href="/grafik-dizayn" className="block hover:text-red-500 mt-2">
                  Grafik Dizayn
                </a>
              </li>
              <li>
                <a href="/frontend" className="block hover:text-red-500 mt-2">
                  Web Frontend
                </a>
              </li>
              <li>
                <a href="/backend" className="block hover:text-red-500 mt-2">
                  Web Backend
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="/phython" className="block hover:text-red-500">
                  Python
                </a>
              </li>
              <li>
                <a href="/ai" className="block hover:text-red-500 mt-2">
                  AI, Suniy Intellekt
                </a>
              </li>
              <li>
                <a href="/ingliztili" className="block hover:text-red-500 mt-2">
                  Ingliz tili
                </a>
              </li>
              <li>
                <a href="/rustili" className="block hover:text-red-500 mt-2">
                  Rus tili
                </a>
              </li>
              <li>
                <a href="/kiberxavfsizlik" className="block hover:text-red-500 mt-2">
                  Kiberxavfsizlik
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="/smm" className="block hover:text-red-500">
                  SMM
                </a>
              </li>
              <li>
                <a href="/math" className="block hover:text-red-500 mt-2">
                  Matematika
                </a>
              </li>
              <li>
                <a href="/interyer" className="block hover:text-red-500 mt-2">
                  Interyer Dizayn
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <a href="#mentors" className="flex items-center gap-2 max-md:hidden">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Mentorlar
        </h1>
      </a>

      <a href="#contact" className="flex items-center gap-2 max-md:hidden">
        <h1 className="text-lg font-semibold text-black hover:text-red-600">
          Aloqa
        </h1>
      </a>
      <div className="flex items-center gap-3 max-md:hidden">
        <Link
          href={"https://bilgi.uz/uz/educational-centers/it/it-house-edu/"}
          target="_blank"
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
          href={"https://ithouseonline.uz/uz"}
          target="_blank"
          className="bg-red-500 text-white text-sm rounded-lg px-3 py-2 flex items-center gap-2"
        >
          <RiComputerLine /> Online
        </Link>
      </div>
      <div className="flex items-center gap-3 max-md:flex md:hidden">
        <Link
          href={"https://it-house-edu.vercel.app/"}
          target="_blank"
          className="bg-red-500 text-white text-sm rounded-lg px-3 py-2 flex items-center gap-2"
        >
          <RiComputerLine /> Online
        </Link>
        <Link
          href={"https://bilgi.uz/uz/educational-centers/it/it-house-edu/"}
          target="_blank"
          className="bg-indigo-600 text-white text-sm rounded-lg px-3 py-2"
        >
          Muddatli To'lov
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
