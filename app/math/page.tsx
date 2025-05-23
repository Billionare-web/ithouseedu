"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import Maths from "@/app/components/imgs/maths.png";
import Math from "@/app/components/imgs/mathimg.png";
import Hikmatillo from "@/app/components/imgs/Hikmattilo.png";
import Navbar from "../navbar";
import Contact from "../contact/page";
import Finishes from "../finishes/page";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Footer from "../components/footer";
import Levels from "./levels";
import Course from "./course";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Umumiy animatsiya davomiyligi
      easing: "ease-out", // Sekin chiqish effekti
      once: true, // Bir marta ishga tushishi uchun
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:px-5 max-md:pl-7">
          <div className="mt-36">
            <h1 className="text-5xl font-bold max-md:text-4xl">Matematika</h1>
            <h1 className="text-4xl mt-8 font-bold max-md:3xl">kursi</h1>
            <h1 className="mt-16">
              Noldan matematik mutaxassisiga aylaning. Algebra, geometriya,
              matematik <br />
              modellashtirish, statistik tahlil va optimallashtirishni
              o‘rganing. Kurs sizga tezda <br />
              kasbga kirishga yordam beradi: siz ilmiy tadqiqot institutlarida,
              moliya va tahlil <br />
              kompaniyalarida ishga joylashishingiz yoki frilanser sifatida
              loyihalar ustida <br />
              ishlashingiz mumkin
            </h1>
            <h1 className="flex items-center gap-2 mt-14">
              <FaCheck className="text-red-600" /> Ishga tayyorlash
            </h1>
            <h1 className="flex items-center gap-2">
              <FaCheck className="text-red-600" /> Shaxsiy mentor yordami
            </h1>
            <h1 className="flex items-center gap-2">
              <FaCheck className="text-red-600" /> Yopiq telegram kanalda kurs
              kuratorlari bilan ma'lumot
            </h1>
            <h1 className="flex items-center gap-2">
              <FaCheck className="text-red-600" /> Planshetsiz bajarilishi
              mumkin, chizish talab qilinmaydi
            </h1>
            <h1 className="flex items-center gap-2">
              <FaCheck className="text-red-600" /> Kurs yakunida sertifikat
            </h1>
          </div>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-[500px] h-[500px] mt-20 max-md:hidden"
            src={Maths}
            alt="Math Img"
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">
            Matematika mutaxassisi nima qiladi?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Matematik mutaxassisi tom ma’noda turli sohalarda ishlaydi.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Statistik tahlillar, prognozlar, optimallashtirish masalalari,
            algoritm dizaynlari, ilmiy tadqiqotlar va <br />
            ma’lumotlarni modellashtirish – bularning barchasi matematik
            mutaxassislar tomonidan amalga oshiriladi. <br />
            Masalan, iqtisodiy tahlil, ilmiy izlanishlar yoki sun’iy intellekt
            tizimlarida qo‘llaniladigan matematik modellarni <br />
            yaratish.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl w-[1000px] mt-8"
            src={Math}
            alt=""
          />
        </div>
        <div id="1" className="mt-12 mb-12 bg-white w-full h-12"></div>
        <div className="px-64 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Kasbda boshlash uchun kerak bo'lgan hamma <br />
            narsani o'rgatamiz
          </h1>
          <div className="flex mt-12 justify-between max-md:flex-col">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Kompozitsiya, algoritmlar va statistika asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Biz mashg‘ulotimizni matematik modellash, statistik <br />
                tahlil va algoritm dizaynidan boshlaymiz. Biz sizning <br />
                analitik fikrlash qobiliyatingizni va matematik <br />
                yechimlarni yaratish mahoratingizni oshirishga yordam <br />
                beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Matematik dasturlar va vositalar
              </h1>
              <h1 className="ml-7 mt-3">
                Biz matematik tahlil uchun asosiy dasturlarni <br />
                o‘rganamiz: MATLAB, R, Python, Excel va Mathematica. <br />
                Biz interfeyslar, kutubxonalar va imkoniyatlar bilan <br />
                batafsil tanishamiz.
              </h1>
            </div>
          </div>
          <div className="flex mt-12 justify-between max-md:flex-col">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Amaliy ko'nikmalar
              </h1>
              <h1 className="ml-7 mt-3">
                Siz statistik tadqiqotlar olib borishingiz, ma’lumotlarni
                <br />
                yig‘ish va tahlil qilish, matematik model yaratish va <br />
                natijalarni taqdim etishingiz kerak.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Kasbda muvaffaqiyat qozonish uchun matematik <br />
                mutaxassis mijozlar bilan ishlash, murakkab <br />
                tushunchalarni sodda qilib tushuntirish, tanqidlar bilan <br />
                ishlay olish va natijalarni aniq taqdim etish muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-28 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga matematikaning asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[119px] h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Hikmatillo}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Hikmatillo <br />
                Bobomurodov
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full max-md:hidden"
            >
              <h1 className="text-gray-400">Ko'nikmalar</h1>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Ma’lumotlar tahlilini va <br />
                  vizualizatsiyalarni yarataman
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Statistik modellar va tahliliy <br />
                  hisobotlar yarataman
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Murakkab matematik <br />
                  formulalar va grafiklar ishlab <br />
                  chiqaman
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar to‘plamlari uchun <br />
                  algoritmlar va modellarni
                  <br />
                  tanlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Kalkulyatsiya va <br />
                  optimallashtirish modellarini <br />
                  yarataman
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Matematik tadqiqotlar va ilmiy <br />
                  maqolalar tayyorlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Keng qamrovli hisobotlar va <br />
                  prezentatsiyalarni tayyorlash.
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  AI va mashinaviy o‘rganish <br />
                  modellarini yaratish va <br />
                  optimallashtirish
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Levels />
        <Course />
        <Finishes />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
