import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="px-44 max-md:px-6 flex justify-between pt-20">
      <div className="flex max-md:flex-col max-md:gap-16">
        <ul className="w-full max-md:w-full">
          <h1 className="text-2xl font-semibold">Ma'lumotlar</h1>
          <li className="mt-6">
            <a href="/">Bosh sahifa</a>
          </li>
          <li className="mt-2">
            <a href="/#mentors">Mentorlar</a>
          </li>
          <li className="mt-2">
            <a href="/#courses">Kurslar</a>
          </li>
          <li className="mt-2">
            <a href="/#3">Bitiruvchilar</a>
          </li>
          <li className="mt-2">
            <a href="/#contact">Aloqa</a>
          </li>
        </ul>
        <ul className="w-full max-md:w-96 max-md:mt-8 mt-0 ml-40 max-md:ml-0">
          <h1 className="text-2xl font-semibold">Yo'nalishlar</h1>
          <li className="mt-6">
            <Link href={"/foundation"}>Foundation</Link>
          </li>
          <li className="mt-2">
            <Link href={"/kids"}>Foundation Kids</Link>
          </li>
          <li className="mt-2">
            <Link href={"/grafik-dizayn"}>Grafik Dizayn</Link>
          </li>
          <li className="mt-2">
            <Link href={"/frontend"}>Web Frontend</Link>
          </li>
          <li className="mt-2">
            <Link href={"/backend"}>Web Backend</Link>
          </li>
          <li className="mt-2">
            <Link href={"/python"}>Phyton</Link>
          </li>
          <li className="mt-2">
            <Link href={"/ai"}>AI, Su'niy Intellekt</Link>
          </li>
        </ul>
        <ul className="w-full max-md:w-full mt-14 max-md:mt-8 ml-40 max-md:ml-0">
          <li>
            <Link href={"/ingliztili"}>Ingliz Tili</Link>
          </li>
          <li className="mt-2">
            <Link href={"/rustili"}>Rus Tili</Link>
          </li>
          <li className="mt-2">
            <Link href={"/smm"}>SMM</Link>
          </li>
          <li className="mt-2">
            <Link href={"/math"}>Matemetika</Link>
          </li>
          <li className="mt-2">
            <Link href={"/kiberxavfsizlik"}>Kiberxavfsizlik</Link>
          </li>
          <li className="mt-2">
            <Link href={"/interyer"}>Interyer Dizayn</Link>
          </li>
        </ul>
        <ul className="w-full max-md:w-full max-md:mt-8 ml-40 max-md:ml-0">
          <h1 className="text-2xl font-semibold">Aloqa</h1>
          <li className="mt-5">
            Bizning ijtimoiy tarmoqlarimizga obuna <br />
            bo'ling va o'quv markazimizning ohirgi <br />
            ma'lumotlardan xabardor bo'ling
          </li>
          <li className="mt-16 flex items-center gap-7">
            <Link href={"https://www.instagram.com/ithouse_edu/"}>
              <FaInstagram className="text-red-600" />
            </Link>
            <Link href={"https://www.youtube.com/@ithouse_edu"}>
              <FaYoutube className="text-red-600" />
            </Link>
            <Link href={"https://www.facebook.com/ithouse.uz/"}>
              <FaFacebook className="text-red-600" />
            </Link>
            <Link href={"https://twitter.com/ithouse"}>
              <FaTwitter className="text-red-600" />
            </Link>
          </li>
          <li className="mt-12">
            <Link
              className="flex items-center gap-2"
              target="_blank"
              href={"https://maps.app.goo.gl/fbZ8pc3ePU6Bqaxu7"}
            >
              <IoLocationSharp className="text-red-600 hover:text-black" />{" "}
              Farxod bozori, 100123, Tashkent
            </Link>
          </li>
          <li className="mt-2">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="tel: +998781137801"
            >
              <FaPhoneAlt className="text-red-600 hover:text-black" /> +998 78
              113-78-01
            </a>
          </li>
          <li className="mt-2 mb-20">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="tel: +998900352727"
            >
              <FaPhoneAlt className="text-red-600 hover:text-black" /> +998 90
              035-27-27
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
