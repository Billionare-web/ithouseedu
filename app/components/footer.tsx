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
    <div className="px-44 flex justify-between pt-20">
      <ul>
        <h1 className="text-2xl font-semibold">Ma'lumotlar</h1>
        <li className="mt-6"><a href="#">Bosh sahifa</a></li>
        <li className="mt-2"><a href="#mentors">Mentorlar</a></li>
        <li className="mt-2"><a href="#courses">Kurslar</a></li>
        <li className="mt-2"><a href="#4">Bitiruvchilar</a></li>
        <li className="mt-2"><a href="#contact">Aloqa</a></li>
      </ul>
      <ul>
        <h1 className="text-2xl font-semibold">Yo'nalishlar</h1>
        <li className="mt-6">
          <Link href={"https://foundation.ithouseedu.uz/"}>Foundation</Link>
        </li>
        <li className="mt-2">
          <Link href={"/kids"}>Foundation Kids</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://grafik-dizayn.ithouseedu.uz/"}>
            Grafik Dizayn
          </Link>
        </li>
        <li className="mt-2">
          <Link href={"https://frontend.ithouseedu.uz/"}>Web Frontend</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://backend.ithouseedu.uz/"}>Web Backend</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://python.ithouseedu.uz/"}>Phyton</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://ai.ithouseedu.uz/"}>AI, Su'niy Intellekt</Link>
        </li>
      </ul>
      <ul className="mt-14">
        <li>
          <Link href={"http://ingliztili.ithouseedu.uz/"}>Ingliz Tili</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://rustili.ithouseedu.uz/"}>Rus Tili</Link>
        </li>
        <li className="mt-2">
          <Link href={""}>SMM</Link>
        </li>
        <li className="mt-2">
          <Link href={""}>Matemetika</Link>
        </li>
        <li className="mt-2">
          <Link href={"https://kiberxavfsizlik.ithouseedu.uz/"}>
            Kiberxavfsizlik
          </Link>
        </li>
        <li className="mt-2">
          <Link href={""}>Interyer Dizayn</Link>
        </li>
      </ul>
      <ul>
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
            <IoLocationSharp className="text-red-600 hover:text-black" /> Farxod
            bozori, 100123, Tashkent
          </Link>
        </li>
        <li className="mt-2">
          <Link className="flex items-center gap-2" target="_blank" href={""}>
            <FaPhoneAlt className="text-red-600 hover:text-black" /> +998 78
            113-78-01
          </Link>
        </li>
        <li className="mt-2 mb-20">
          <Link
            className="flex items-center gap-2"
            target="_blank"
            href={"https://tel:+998900352727"}
          >
            <FaPhoneAlt className="text-red-600 hover:text-black" /> +998 90
            035-27-27
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
