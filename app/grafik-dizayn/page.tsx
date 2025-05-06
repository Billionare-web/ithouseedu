"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import GrafikDizayn from "@/app/components/imgs/grafik-3.png";
import Grafik from "@/app/components/imgs/grafik.png";
import Abror from "@/app/components/imgs/Abror.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Photoshop from "@/app/components/imgs/photoshop.png";
import Illustrator from "@/app/components/imgs/illustrator.png";
import Figma from "@/app/components/imgs/Figma.png";
import InDesign from "@/app/components/imgs/indesign.png";
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
      <div>
        <Navbar />
        <div>
          <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:pl-5 max-md:pr-7">
            <div className="mt-36">
              <h1 className="text-5xl font-bold max-md:text-4xl">
                Grafik Dizayner
              </h1>
              <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
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
                  <span className="max-md:hidden">Photoshop</span>
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image
                    className="w-7 h-7 rounded-sm"
                    src={Illustrator}
                    alt=""
                  />
                  <span className="max-md:hidden">Illustrator</span>
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image className="w-7 h-7 rounded-sm" src={Figma} alt="" />
                  <span className="max-md:hidden">Figma</span>
                </h1>
                <h1 className="flex items-center gap-2">
                  <Image className="w-7 h-7 rounded-sm" src={InDesign} alt="" />
                  <span className="max-md:hidden">InDesign</span>
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
              src={GrafikDizayn}
              alt="Grafik Design"
            />
          </div>
          <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
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
          <div className="px-64 max-md:px-5">
            <h1 className="text-4xl font-bold">
              Kasbda boshlash uchun kerak bo'lgan hamma <br />
              narsani o'rgatamiz
            </h1>
            <div className="flex mt-16 justify-between max-md:flex-col">
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
            <div className="flex mt-12 justify-between max-md:flex-col">
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
          <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
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
                className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full max-md:hidden"
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
          <Levels />
          <Course />
          <Finishes />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
