"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import GrafikDizayn from "@/app/components/imgs/grafik-3.png";
import Grafik from "@/app/components/imgs/grafik.png";
import Abror from "@/app/components/imgs/Abror.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Women from "@/app/components/imgs/Women.png";
import Bitir from "@/app/components/imgs/Bitir.png";
import Logo from "@/app/components/imgs/logo.png";
import Photoshop from "@/app/components/imgs/photoshop.png";
import Illustrator from "@/app/components/imgs/illustrator.png";
import Figma from "@/app/components/imgs/Figma.png";
import InDesign from "@/app/components/imgs/indesign.png";
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
      <div>
        <Navbar />
        <div className="">
          <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-wull">
            <div className="mt-36">
              <h1 className="text-5xl font-bold">Grafik Dizayner</h1>
              <h1 className="text-4xl mt-8 font-bold">kursi</h1>
              <h1 className="mt-16">
                Noldan grafik dizaynerga aylaning. Chiroyli grafikalar,
                lopotiplar, reklama kreativlari <br />
                va bannerlari hamda brend aydentikasi yaratishni o'rganing.
                <br />
                Kurs sizga tezda kasbga kirishga yordak beradi:siz dizayn
                studiyasida, reklama <br />
                agentligida ishga joylashish yoki frilanser sifatida buyurtmalar
                qabul qilish uchun
              </h1>
              <div className="flex items-center gap-5 mt-14">
                <h1 className="flex items-center gap-2">
                  <Image
                    className="w-7 h-7 rounded-sm"
                    src={Photoshop}
                    alt=""
                  />
                  Photoshop
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image
                    className="w-7 h-7 rounded-sm"
                    src={Illustrator}
                    alt=""
                  />
                  Illustrator
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image className="w-7 h-7 rounded-sm" src={Figma} alt="" />
                  Figma
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image className="w-7 h-7 rounded-sm" src={InDesign} alt="" />
                  InDesign
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
              className="w-[500px] h-[500px] mt-20"
              src={GrafikDizayn}
              alt="Interior Design"
            />
          </div>
          <div className="pl-64 pr-24 mt-28">
            <h1 className="text-4xl font-bold">Grafik dizayner nima qiladi?</h1>
            <h1 className="text-xl font-semibold mt-20">
              Grafik dizayn tom ma'noda bizning atrofimizda.
            </h1>
            <h1 className="text-xl font-semibold mt-8">
              Mahsulotlar qadoqlari, xaritalar va diagrammalar, tovar, ochilish
              sahifalari, ilovalar, reklama, bannerlar va <br />
              boshqa ko'p narsalar - bularning barchasi grafik dizaynerlar
              tomonidan ishlab chiqilgan.
            </h1>
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="rounded-2xl max-w-full w-[1000px] my-8"
              src={Grafik}
              alt="Interior Image"
            />
          </div>
          <div id="1" className="mt-12 mb-12 bg-white w-full h-12"></div>
          <div className="px-64">
            <h1 className="text-4xl font-bold">
              Kasbda boshlash uchun kerak bo'lgan hamma <br />
              narsani o'rgatamiz
            </h1>
            <div className="flex mt-16 justify-between">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Kompozitsiya, rang, tipografiya asoslari
                </h1>
                <h1 className="ml-7 mt-3">
                  Biz mashg'ulotimizni vizual idrok etish qonunlari, <br />
                  kompozitsiya qoidalari va tipografiyadan boshlaymiz. <br />
                  Biz sizning kuzatish qobiliyatingiz va badiiy didingizni
                  <br />
                  yaxshilashga yordam beramiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                  Grafik dizayn dasturiy ta'minot
                </h1>
                <h1 className="ml-7 mt-3">
                  Biz grafik dizayn uchun asosiy dasturlarni o'rganamiz: <br />
                  Illustrator, Photoshop, CorolDraw, InDesign, After <br />
                  effects. Biz interfeys, vositalar va imkoniyatlar bilan <br />
                  batafsil tanishamiz.
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
                  Siz mijoz bilan intervyu olishingiz, qisqacha ma'lumot <br />
                  olishingiz, dizaynni ishlab chiqishingiz, dizaynni <br />
                  ommaviy axborot vositalariga topshirishingiz va tayyor <br />
                  natijani mijozga taqdim etishingiz kerak.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
                </h1>
                <h1 className="ml-7 mt-3">
                  Kasbda muvaffaqiyat qozonish uchun dizayner mijozlar <br />
                  bilan muzokaralar olib borishi, tuzatishlar va tanqidlar{" "}
                  <br />
                  bilan ishlay olishi va yakuniy natijani taqdim eta olishi{" "}
                  <br />
                  muhimdir.
                </h1>
              </div>
            </div>
          </div>
          <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20">
            <h1 className="text-4xl font-bold">
              Biz sizga Grafik Dizaynerning asosiy <br />
              ko'nikmalarini o'rgatamiz
            </h1>
            <div className="flex gap-3 mt-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-96 rounded-2xl px-4 py-[158px] h-full"
              >
                <Image
                  className="rounded-full w-32 h-32 mx-auto"
                  src={Abror}
                  alt=""
                />
                <h1 className="text-gray-400 text-center">Mentor</h1>
                <h1 className="text-3xl font-bold text-center">
                  Abror <br />
                  Narziqulov
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full"
              >
                <h1 className="text-gray-400">Ko'nikmalar</h1>
                <div className="flex">
                  <h1 className="flex gap-2 mt-8 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Illustratorda grafik va dizayn <br />
                    matnlarini yarataman
                  </h1>
                  <h1 className="flex gap-2 mt-8 text-lg ml-[104px]">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Men logotiplar va brend <br />
                    kitoblarini yarataman
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-8 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Men murakkab vektor <br />
                    rasmlarini yarataman
                  </h1>
                  <h1 className="flex gap-2 mt-8 text-lg ml-[156px]">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Shrift juftlarini tanlash
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-8 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Men plakatlar, bannerlar, tashrif <br />
                    qog'ozlari, taqdimotlar va POS- <br />
                    materiallar dizaynini ishlab <br />
                    chiqaman
                  </h1>
                  <h1 className="flex gap-2 mt-8 text-lg ml-20">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    After efects dasturida dinamik <br />
                    postar yarata olaman
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-8 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Men ko'p sahifali sahifalar <br />
                    yarataman va chop etish uchun
                    <br />
                    maketlarni tayyorlayman.
                  </h1>
                  <h1 className="flex gap-2 mt-8 text-lg ml-20">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Musiqa mos kadrlarni tanlab <br />
                    video rolik tayorlayman
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
              hh.uz ma'lumolatlariga ko'ra, Grafik Dizaynerning
              <br />
              o'rtacha ish haqi 9 500 000 tashkil qiladi
            </h1>
            <div className="flex gap-3">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48"
              >
                <h1 className="text-4xl font-bold text-center">3 500 000</h1>
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
                <h1 className="text-4xl font-bold text-center">18 000 000</h1>
                <h1 className="text-center mx-[86px] mt-56 flex items-center gap-2">
                  <span className="bg-white rounded-3xl px-3 py-2">Senior</span>
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
              Biz Grafik Dizaynerlikni shu narsalarni istagan o'quvchilar uchun
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
                  Kompozitsiya, tipografiya va <br />
                  grafika dizayn mahoratingizni <br />
                  oshiring
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
    </div>
  );
}

export default Page;
