"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import PhytonPer from "@/app/components/imgs/pythonper.png";
import Phyton2 from "@/app/components/imgs/python2.png";
import Xumoyun from "@/app/components/imgs/Xumoyun.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import Women from "@/app/components/imgs/Women.png";
import Bitir from "@/app/components/imgs/Bitir.png";
import Logo from "@/app/components/imgs/logo.png";
import Navbar from "../navbar";
import Footer from "../components/footer";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
      <div>
        <Navbar />
        <div className="">
          <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-wull">
            <div className="mt-36">
              <h1 className="text-5xl font-bold">Phyton Dasturchisi</h1>
              <h1 className="text-4xl mt-8 font-bold">kursi</h1>
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
              className="w-[500px] h-[500px] mt-20"
              src={PhytonPer}
              alt=""
            />
          </div>
          <div className="pl-64 pr-24 mt-28">
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
              alt=""
            />
          </div>
          <div id="1" className="mt-12 mb-12 bg-white w-full h-12"></div>
          <div className="px-64">
            <h1 className="text-4xl font-bold">
              Kasbda boshlash uchun kerak bo'lgan hamma <br />
              narsani o'rgatamiz
            </h1>
            <div className="flex mt-12 justify-between">
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
            <div className="flex mt-12 justify-between">
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
                  dasturchisi mijozlar bilan ishlash, murakkab dasturlarni{" "}
                  <br />
                  sodda qilib tushuntirish, tanqidlar bilan ishlay olish va{" "}
                  <br />
                  natijalarni aniq taqdim etish muhimdir.
                </h1>
              </div>
            </div>
          </div>
          <div id="mentor" className="mt-28 bg-blue-50 px-64 py-20">
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
                className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full"
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
          <div className="px-64 py-14">
            <h1 className="text-4xl font-bold">Tajriba bilan daromad oshadi</h1>
            <h1 className="text-sm mt-16 font-bold flex gap-2 items-center text-gray-400">
              <div className="text-2xl bg-orange-600 rounded-full w-12 h-12 text-white text-center pt-2">
                hh
              </div>
              hh.uz ma'lumolatlariga ko'ra, Phyton dasturchisining
              <br />
              o'rtacha ish haqi 9 500 000 tashkil qiladi
            </h1>
            <div className="flex gap-3">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48"
              >
                <h1 className="text-4xl font-bold text-center">4 000 000</h1>
                <h1 className="text-center mx-[71px] mt-8 flex items-center gap-2">
                  <span className="bg-white rounded-3xl px-3 py-2">Junior</span>
                  1 yilgacha
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-24"
              >
                <h1 className="text-4xl font-bold text-center">10 000 000</h1>
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
                <h1 className="text-4xl font-bold text-center">20 000 000</h1>
                <h1 className="text-center mx-[85px] mt-56 flex items-center gap-2">
                  <span className="bg-white rounded-3xl px-3 py-2">Sunior</span>
                  3+ yil
                </h1>
              </div>
            </div>
          </div>
          <div className="px-64 mt-10">
            <h1 className="text-4xl font-bold">
              Ushbu kurs kimlarga to'g'ri keladi
            </h1>
            <h1 className="mt-8">
              Biz Python dasturlashni shu narsalarni istagan o'quvchilar uchun
              qildik
            </h1>
            <div className="flex justify-between mt-7 gap-5">
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
                  Bilimlarni tizimlashtirish va <br />
                  Phytonni o'z kasbingiz qiling
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Asosiy bilimlaringizni <br />
                  chuqurlashtiring
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Python dasturlash, algoritmlar <br />
                  va ma’lumotlar tahlil <br />
                  mahoratingizni oshiring.
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
          <div className="px-64">
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
            className="bg-red-600 flex items-center justify-between pt-32 mt-28 pb-20 px-56"
          >
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-4xl font-bold text-white"
            >
              Kurslar haqida to'liq ma'lumotga <br />
              ega bo'lishni istasangiz <br />
              formani to'ldiring
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-white rounded-2xl px-4 py-5 w-96"
            >
              <div className="flex items-center gap-2 ml-5">
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
    </div>
  );
}

export default Page;
