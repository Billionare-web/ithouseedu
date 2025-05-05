"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import PhytonPer from "@/app/components/imgs/pythonper.png";
import Phyton2 from "@/app/components/imgs/python2.png";
import Xumoyun from "@/app/components/imgs/Xumoyun.png";
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
      <div className="">
        <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:pl-5 max-md:pr-7">
          <div className="mt-36">
            <h1 className="text-5xl font-bold max-md:text-4xl">
              Phyton Dasturchisi
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              Noldan Python dasturchisiga aylaning. Dasturlash asoslarini,
              Python <br />
              kutubxonalarini, ma’lumotlar tahlilini, veb-ishlab chiqishni va
              sun’iy intellektni <br />
              o‘rganing. Kurs sizga tezda kasbga kirishga yordam beradi: siz
              dasturlash <br />
              kompaniyalarida, IT startaplarida yoki frilanser sifatida
              loyihalar ustida ishlashingiz <br />
              mumkin.
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
            src={PhytonPer}
            alt=""
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">
            Phyton dasturchisi nima qiladi?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Python dasturchisi turli sohalarda dasturlash va tizimlarni
            yaratishda ishlaydi.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Ma’lumotlar tahlili, veb-ilovalar yaratish, sun’iy intellekt
            modellarini ishlab chiqish, mashinaviy o‘rganish <br />
            algoritmlarini yaratish, va avtomatlashtirilgan tizimlarni ishlab
            chiqish – bularning barchasi Python <br />
            dasturchilari tomonidan amalga oshiriladi. Masalan, ma’lumotlar
            tahlili, web-sayt yaratish, API’lar ishlab <br />
            chiqish yoki sun’iy intellekt tizimlarini yaratish uchun Python
            dasturlash tili ishlatiladi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl w-[1000px] mt-8"
            src={Phyton2}
            alt="Phyton Big Img"
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
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Kompozitsiya, algoritmlar va statistika asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Biz mashg‘ulotimizni Phyton dasturlash, algoritm <br />
                dizayn va kodlash tamoyillaridan boshlaymiz. Biz <br />
                sizning analitik fikrlash qobiliyatingizni va dasturlash
                <br />
                yechimlarni yaratish mahoratingizni oshirishga yordam <br />
                beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Dasturlash dasturlari va vositalar
              </h1>
              <h1 className="ml-7 mt-3">
                Biz Python dasturlash uchun asosiy kutubxonalar va <br />
                vositalarni o‘rganamiz: NumPy, Pandas, Flask, Django <br />
                va Matplotlib. Biz kodlash muhiti, kutubxonalar va <br />
                imkoniyatlar bilan batafsil tanishamiz.
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
                Siz dasturiy tizimlar yaratishingiz, ma’lumotlarni <br />
                to‘plash va tahlil qilish, Python-da kod yozish va <br />
                dasturiy yechimlarni taqdim etishingiz kerak.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Kasbda muvaffaqiyat qozonish uchun Phyton <br />
                dasturchisi mijozlar bilan ishlash, murakkab dasturlarni <br />
                sodda qilib tushuntirish, tanqidlar bilan ishlay olish va <br />
                natijalarni aniq taqdim etish muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-28 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga Phytonning asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-[350px] rounded-2xl px-4 py-[202px] h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Xumoyun}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Xumoyun <br />
                Ustoz
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
                <h1 className="flex gap-2 mt-3 text-lg ml-3">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Statistik va dinamik ma'lumotlar <br />
                  modellarini ishlab chiqaman
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Murakkab algoritmlar va <br />
                  Phyton kutubxonalari <br /> yordamida tahlil qilish
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-7">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar to‘plamlari uchun <br />
                  optimallashtirilgan algoritmlar
                  <br />
                  yarataman
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Kalkulyatsiya va <br />
                  optimallashtirish modellarini <br />
                  ishlab chiqaman
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-2">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Python yordamida ilmiy <br />
                  tadqiqotlar va texnik maqolalar <br />
                  tayyorlayman
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Keng qamrovli hisobotlar va <br />
                  taqdimotlar uchun dasturiy <br /> yechimlar tayyorlayman.
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-4">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  AI va mashinaviy o‘rganish <br />
                  modellarini yaratish va <br />
                  optimallashtirish orqali samarali <br />
                  tizimlar quraman
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
