"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Found from "@/app/components/imgs/Foundation-3.png";
import MS from "@/app/components/imgs/ms.png";
import Mahmudjon from "@/app/components/imgs/Mahmud.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Women from "@/app/components/imgs/Women.png";
import Bitir from "@/app/components/imgs/Bitir.png";
import Logo from "@/app/components/imgs/logo.png";
import Word from "@/app/components/imgs/word2.png";
import Excel from "@/app/components/imgs/excel.png";
import PowerPoint from "@/app/components/imgs/power.png";
import Canva from "@/app/components/imgs/canva.png";
import Footer from "../components/footer";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from "../navbar";

function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Umumiy animatsiya davomiyligi
      easing: "ease-out", // Sekin chiqish effekti
      once: true, // Bir marta ishga tushishi uchun
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Formani qayta yuklanishdan to'xtatadi
    // Yuborish logikasi
    console.log("Ism:", name);
    console.log("Telefon raqam:", phone);

    // Inputlarni tozalash
    setName("");
    setPhone("");

    // Saytni yangilash
    window.location.reload(); // Sahifani yangilash
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex pl-56 max-md:pl-5 pr-24 max-md:pr-6 justify-between bg-blue-50 pb-20 w-full h-full">
          <div className="mt-36 max-md:w-full">
            <h1 className="text-5xl font-bold">Foundation</h1>
            <h1 className="text-4xl font-bold mt-5">
              (Kompyuter Savodxonligi)
            </h1>
            <h1 className="text-4xl mt-8 font-bold">kursi</h1>
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
            <div className="flex items-center gap-5 mt-14">
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" src={Word} alt="" />
                <span className="max-md:hidden">Word</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" src={Excel} alt="" />
                <span className="max-md:hidden">Excel</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" src={PowerPoint} alt="" />
                <span className="max-md:hidden">PowerPoint</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7 rounded-sm" src={Canva} alt="" />
                <span className="max-md:hidden">Canva</span>
              </h1>
            </div>
            <h1 className="flex items-center gap-2 mt-8">
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
            src={Found}
            alt="Interior Design"
          />
        </div>
        <div className="pl-64 max-md:pl-5 pr-24 max-md:pr-5 mt-28">
          <h1 className="text-4xl font-bold">
            Kompyuter Savodxonligi nima uchun muhim?
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
          <div className="flex mt-16 justify-between max-md:flex-col">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Kompyuter savodxonligi asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Mashg‘ulotlarimizni kompyuter tizimlarining asoslari, <br />
                ma’lumotlar strukturalari, operatsion tizimlar va <br />
                algoritmlarni o‘rganishdan boshlaymiz. Sizning <br />
                mantiqiy fikrlash va texnik ko‘nikmalaringizni <br />
                rivojlantirishga yordam beramiz.
              </h1>
            </div>
            <div
              className="max-md:mt-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
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
                Siz elektron pochta bilan ishlash, hujjatlar yaratish, <br />
                ma’lumotlarni tartibga solish, tizimni optimallashtirish
                <br />
                va xavfsiz saqlash jarayonlarini o‘rganasiz.
              </h1>
            </div>
            <div
              className="max-md:mt-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
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
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga Kompyuter Savodxonligini asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[75px] h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Mahmudjon}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Mahmudjon <br />
                Naimjonov
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full max-md:hidden"
            >
              <h1 className="text-gray-400">Ko'nikmalar</h1>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Dasturlar va tizimlar bilan <br />
                  ishlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Avtomatlashtirish va qulaylik
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar bilan ishlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[115px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Grafik va video tahrirlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Dasturlash asoslari
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[166px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Internet xavfsizligi
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Kompyuter va operatsion tizimlar
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[52px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
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
            hh.uz ma'lumolatlariga ko'ra, Kompyuter Savodxonligi mutaxassisi
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
              <h1 className="text-center mx-[86px] mt-56 flex items-center gap-2">
                <span className="bg-white rounded-3xl px-3 py-2">Senior</span>
                3+ yil
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
        <div
          id="contact"
          className="bg-red-600 flex items-center justify-between pt-32 mt-28 pb-20 px-56 max-md:px-5 max-md:pr-5"
        >
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-4xl font-bold text-white max-md:hidden"
          >
            Kurslar haqida to'liq ma'lumotga <br />
            ega bo'lishni istasangiz <br />
            formani to'ldiring
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-white rounded-2xl px-4 py-5 w-96 max-md:w-[361px]"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="flex items-center gap-2 ml-5"
            >
              <Image className="w-12 h-12" src={Logo} alt="" />
              <h1 className="font-bold text-2xl">IT HOUSE</h1>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  className="border-b-2 border-b-black mt-12 outline-none w-full"
                  type="text"
                  placeholder="Ism"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Inputni boshqarish
                />
                <input
                  className="border-b-2 border-b-black mt-8 outline-none w-full"
                  type="number"
                  placeholder="Telefon raqam"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} // Inputni boshqarish
                />
                <button
                  type="submit"
                  className="bg-gray-400 text-white rounded-lg mt-20 mx-20 mb-12 px-16 py-3"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
