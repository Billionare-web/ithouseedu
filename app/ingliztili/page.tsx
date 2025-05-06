"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import English from "@/app/components/imgs/english.png";
import English2 from "@/app/components/imgs/english2.png";
import Sevara from "@/app/components/imgs/Sevara.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer";
import Contact from "../contact/page";
import Finishes from "../finishes/page";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from "../navbar";
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
        <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:pl-5 max-md:pr-7">
          <div className="mt-36">
            <h1 className="text-5xl font-bold max-md:text-4xl">Ingliz tili</h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              Noldan Ingliz tili mutaxassisiga aylaning Ingliz tili
              grammatikasi, so‘z boyligini <br />
              oshirish, muloqot qilish, va yozuv ko‘nikmalarini o‘rganing. Kurs
              sizga tezda kasbga <br />
              kirishga yordam beradi: siz ingliz tili o‘qituvchisi, tarjimon,
              yoki frilanser sifatida <br />
              loyihalar ustida ishlashingiz mumkin.
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
            data-aos-easing="ease-out"
            className="w-[600px] h-[500px] mt-20 max-md:hidden"
            src={English}
            alt=""
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">Ingliz tili nima uchun kerak?</h1>
          <h1 className="text-xl font-semibold mt-20">
            Ingliz tili mutaxassisi tilni o‘rganish, tarjima qilish va
            kommunikatsiya sohalarida ishlaydi.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Matnlarni tarjima qilish, grammatika va stilni to‘g‘ri qo‘llash,
            tilni o‘rgatish va o‘rgatuvchi materiallar tayyorlash <br />–
            bularning barchasi ingliz tili mutaxassislarining vazifalari
            hisoblanadi. Masalan, ingliz tilida og‘zaki va yozma <br />
            muloqot, akademik va professional matnlarni yaratish, va ingliz
            tilida ta’lim berish orqali tilni yanada <br />
            rivojlantirish uchun turli metodlardan foydalaniladi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl max-w-full my-8"
            src={English2}
            alt=""
          />
        </div>
        <div id="1" className="mt-12 mb-12 bg-white w-full h-12"></div>
        <div className="px-64 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Kasbda boshlash uchun kerak bo'lgan hamma <br />
            narsani o'rgatamiz
          </h1>
          <div className="flex mt-16 justify-between max-md:flex-col">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Ingliz tili asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Biz darslarimizni ingliz tili grammatikasi, lug‘atni
                <br />
                rivojlantirish va samarali muloqot qilish strategiyalaridan{" "}
                <br />
                boshlaymiz. Sizning kreativ fikrlash qobiliyatingizni va
                <br />
                ingliz tilini o‘rganish mahoratingizni rivojlantirishga <br />
                yordam beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Ingliz tili o‘rganish vositalari va platformalar
              </h1>
              <h1 className="ml-7 mt-3">
                Biz ingliz tilini o‘rganish uchun asosiy resurslar va <br />
                vositalarni o‘rganamiz: grammatik kitoblar, onlayn <br />
                platformalar, til o‘rganish ilovalari va ta’lim veb- <br />
                saytlari. Til o‘rganish usullari, talaffuzni <br />
                takomillashtirish va muloqot qilish ko‘nikmalarini <br />
                batafsil ko‘rib chiqamiz.
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
                Siz ingliz tilida o‘qish, yozish, gapirish va <br />
                tinglashni mashq qilasiz. Ingliz tilida insholar <br />
                yozish, muhokamalarda ishtirok etish <br />
                hamda yozma va og‘zaki ingliz tilini <br />
                o'rganish qobiliyatingizni rivojlantirasiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Ingliz tilini muvaffaqiyatli o‘rganish uchun boshqalar <br />
                bilan muloqot qilish, fikrlaringizni aniq ifodalash, <br />
                tanqidlarni qabul qilish va g‘oyalarni ishonchli tarzda <br />
                taqdim etish muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga Ingliz Tilini asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[147px] h-[546px]"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Sevara}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Sevara <br />
                Jo'rayeva
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
                  Grammatika, so‘z boyligini <br />
                  oshirish va gap tuzishni <br />
                  o‘rganamiz.
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Nutq va tinglash ko‘nikmalarini <br />
                  rivojlantirish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ingliz tilida yozish va og‘zaki <br />
                  muloqotni takomillashtiramiz, <br />
                  aniq va ravon ifodalashni <br />
                  o‘rganamiz.
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ijtimoiy tarmoqlar uchun <br />
                  optimallashtirilgan reklama <br />
                  kampaniyalarini yaratish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ingliz tili grammatikasini o‘rganib, <br />
                  so‘z boyligini kengaytirishga <br />
                  yordam beramiz.
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ingliz tilida o‘qish va matnlarni <br />
                  tahlil qilish ko‘nikmalari.
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-3 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ingliz Tilida professional <br />
                  yozuvlarni ko‘nikmalarini <br />
                  o‘rgatamiz
                </h1>
                <h1 className="flex gap-2 mt-3 text-lg ml-24">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Suhbatlashish va muloqot qilish <br />
                  ko‘nikmalarini oshiramiz.
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
