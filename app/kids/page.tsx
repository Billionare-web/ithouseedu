"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import FoundKids from "@/app/components/imgs/Foundkids.png";
import MS from "@/app/components/imgs/ms.png";
import Nodirbek from "@/app/components/imgs/Nodirbek.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import Women from "@/app/components/imgs/Women.png";
import Navbar from "../navbar";
import Contact from "../contact/page";
import Finishes from "../finishes/page";
import Footer from "../components/footer";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Kids() {
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
            <h1 className="text-5xl font-bold max-md:text-4xl">
              Foundation Kids
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl max-md:mt-5">
              (Kompyuter savodxonligi)
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              Kompyuter savodxonligi – zamonaviy texnologiyalar bilan ishlash
              ko‘nikmalarini o‘z <br />
              ichiga oladi. Bu fan kompyuterning asosiy qismlari, operatsion
              tizimlar, ofis <br />
              dasturlari, internetdan foydalanish, ma’lumotlarni saqlash va
              xavfsizlik choralari kabi <br />
              mavzularni o‘rgatadi. Kompyuter savodxonligi har qanday sohada
              ishlash uchun <br />
              muhim bo‘lib, kundalik hayotda ham foydalidir.
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
            className="w-[500px] h-[500px] mt-20 max-md:hidden"
            src={FoundKids}
            alt="Interior Design"
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">
            Kompyuter savodxonligi nima uchun muhim?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Zamonaviy dunyoda kompyuter savodxonligi har bir inson uchun zarur.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Elektron pochta, matn muharrirlari, internetda qidiruv, fayllarni
            boshqarish, kiberxavfsizlik choralari, bulutli <br />
            texnologiyalar va dasturiy ta’minotdan samarali foydalanish –
            bularning barchasi kompyuter savodxonligi <br />
            ko‘nikmalariga kiradi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl max-w-full w-[1000px] my-8"
            src={MS}
            alt="Interior Image"
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
                Kompyuter savodxonligi asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Mashg‘ulotlarimizni kompyuter tizimlarining asoslari,
                <br />
                ma’lumotlar strukturalari, operatsion tizimlar va <br />
                algoritmlarni o‘rganishdan boshlaymiz. Sizning <br />
                mantiqiy fikrlash va texnik ko‘nikmalaringizni <br />
                rivojlantirishga yordam beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Dasturiy ta’minot bilan ishlash
              </h1>
              <h1 className="ml-7 mt-3">
                Asosiy dasturiy vositalarni o‘rganamiz: Windows va <br />
                Linux operatsion tizimlari, Microsoft Office, Google <br />
                Docs, internet xavfsizligi, fayl tizimlari va bulutli <br />
                texnologiyalar. Biz interfeys, dasturlar va ularning <br />
                imkoniyatlari bilan batafsil tanishamiz.
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
                Siz elektron pochta bilan ishlash, hujjatlar yaratish,
                <br />
                ma’lumotlarni tartibga solish, tizimni optimallashtirish <br />
                va xavfsiz saqlash jarayonlarini o‘rganasiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Muvaffaqiyatli bo‘lish uchun foydalanuvchi <br />
                texnologiyalarni tushunishi, muammolarni hal qila <br />
                olishi, samarali muloqot va kreativ yondashuvni <br />
                rivojlantirishi muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-24 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga kompyter savodxonligini asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-24 h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Nodirbek}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Nodirbek <br />
                Kuchkarov
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full max-md:hidden"
            >
              <h1 className="text-gray-400">Ko'nikmalar</h1>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Dasturlar va tizimlar bilan <br />
                  ishlash
                </h1>
                <h1 className="flex gap-2 mt-9 ml-28 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Avtomatlashtirish va qulaylik
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar bilan ishlash
                </h1>
                <h1 className="flex gap-2 mt-9 ml-[115px] text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Grafik va video tahrirlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Dasturlash asoslari
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-[167px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Internet xavfsizligi
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Kompyuter va operatsion <br />
                  tizimlar
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-[117px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Internet va onlayn xizmatlar
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-64 py-14 max-md:px-5">
          <h1 className="text-4xl font-bold">Tajriba bilan daromad oshadi</h1>
          <h1 className="text-sm mt-16 font-bold flex gap-2 items-center text-gray-400">
            <div className="text-2xl bg-orange-600 rounded-full w-12 h-12 text-white text-center pt-2">
              hh
            </div>
            hh.uz ma'lumolatlariga ko'ra, Kompyuter savodxonligi mutaxassisi
            <br />
            o'rtacha ish haqi 6 500 000 tashkil qiladi
          </h1>
          <div className="flex gap-3 max-md:flex-col">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48 max-md:mt-10"
            >
              <h1 className="text-4xl font-bold text-center">3 000 000</h1>
              <h1 className="text-center mx-[71px] mt-8 flex items-center gap-2">
                <span className="bg-white rounded-3xl px-3 py-2">Junior</span>1
                yilgacha
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-24 max-md:mt-0"
            >
              <h1 className="text-4xl font-bold text-center">7 000 000</h1>
              <h1 className="text-center mx-[60px] mt-32 flex items-center gap-2">
                <span className="bg-white rounded-3xl px-3 py-2">Middle</span>
                1-3 yilgacha
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-gray-200 rounded-3xl py-5 px-5 w-full"
            >
              <h1 className="text-4xl font-bold text-center">9 000 000</h1>
              <h1 className="text-center mx-[85px] mt-56 flex items-center gap-2">
                <span className="bg-white rounded-3xl px-3 py-2">Sunior</span>3+
                yil
              </h1>
            </div>
          </div>
        </div>
        <div className="px-64 mt-10 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Ushbu kurs kimlarga to'g'ri keladi
          </h1>
          <h1 className="mt-8">
            Biz Grafik Dizaynerlikni shu narsalarni istagan o'quvchilar uchun
            qildik
          </h1>
          <div className="flex justify-between mt-7 gap-5 max-md:flex-col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
            >
              <Image className="rounded-full w-24 h-24" src={Girl} alt="" />
              <h1 className="text-xl font-bold mt-4">
                Kasbni noldan boshlab o'rganish
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Boshlash uchun maxsus bilim <br />
                talab etilmaydi
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Amaliy ko'nikmalarga ega <br />
                bo'lasiz
              </h1>
              <h1 className="flex mt-6 pb-12 gap-2">
                <FaCheck />
                Kelajakda ish topishga yordam <br />
                beradigan jozibali <br />
                portfolioingizni to'plang
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
            >
              <Image className="rounded-full w-24 h-24" src={Boy} alt="" />
              <h1 className="text-xl font-bold mt-4">
                Bilimlarni tizimlashtirish va kompyuter savodxonligini o'z
                kasbingiz qiling
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Asosiy bilimlaringizni <br />
                chuqurlashtiring
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Kompyuterda har tomonlama <br />
                bilimlaringizni kuchaytiring
              </h1>
              <h1 className="flex mt-6 pb-12 gap-2">
                <FaCheck />
                Portfolioingizni yangi keyslar <br />
                bilan to'ldiring
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
            >
              <Image className="rounded-full w-24 h-24" src={Women} alt="" />
              <h1 className="text-xl font-bold mt-4">
                Marketolog, muharrir va boshqa <br />
                kasblar uchun qo'shimcha oling
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Siz biznes vazifalari hal qila <br />
                olasiz
              </h1>
              <h1 className="flex mt-6 gap-2">
                <FaCheck />
                Ko'proq daromad olasiz
              </h1>
              <h1 className="flex mt-6 pb-12 gap-2">
                <FaCheck />
                Boshqa hamkasblarga <br />
                qaraganda qo'shimcha bilimga <br />
                ega bo'ling
              </h1>
            </div>
          </div>
        </div>
        <Finishes />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
