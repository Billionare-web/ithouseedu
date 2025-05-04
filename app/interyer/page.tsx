"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Inter from "@/app/components/imgs/Interior-design-3.png";
import Interyer from "@/app/components/imgs/interyerdizayn.png";
import User from "@/app/components/imgs/user.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Women from "@/app/components/imgs/Women.png";
import Footer from "../components/footer";
import Contact from "../contact/page";
import Finishes from "../finishes/page";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from "../navbar";

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
                Interyer Dizayn
              </h1>
              <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
              <h1 className="mt-16">
                Interyer dizayn — bu bino ichki makonlarini chiroyli, qulay va
                funksional qilish <br />
                jarayoni. Dizaynerlar mijozning ehtiyojlari va estetik dididan
                kelib chiqib, ranglar, <br />
                shakllar, yoritish, mebel va dekoratsiyani uyg‘unlashtiradilar.
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
              src={Inter}
              alt="Interior Design"
            />
          </div>
          <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
            <h1 className="text-4xl font-bold">
              Interyer Dizayner nima qiladi?
            </h1>
            <h1 className="text-xl font-semibold mt-20">
              Interyer dizayn bizning atrofimizda.
            </h1>
            <h1 className="text-xl font-semibold mt-8">
              Makonlar rejalashtirishi, mebel joylashuvi, yoritish tizimi, devor
              bezaklari, ranglar kombinatsiyasi va boshqa <br />
              ko‘plab ichki yechimlar — bularning barchasi interyer dizaynerlar
              tomonidan ishlab chiqiladi.
            </h1>
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="rounded-2xl max-w-full my-8"
              src={Interyer}
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
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                  Interyer dizayn asoslari
                </h1>
                <h1 className="ml-7 mt-3">
                  Kompozitsiya, rang va makon tushunchalari <br />
                  Mashg‘ulotimizni makon kompozitsiyasi, rang <br />
                  uyg‘unligi va vizual idrok qonunlari bilan <br />
                  boshlaymiz. Sizning fazoviy fikrlash, kuzatish qobiliyatingiz
                  va <br />
                  badiiy didingizni rivojlantirishga yordam beramiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                  Interyer Dizayn dasturiy ta'minoti
                </h1>
                <h1 className="ml-7 mt-3">
                  Interyer dizayn uchun asosiy dasturlarni o‘rganamiz: <br />
                  AutoCAD, 3ds Max, SketchUp va Revit. <br />
                  Ushbu dasturlarda makon yaratish, modellashtirish <br />
                  va vizualizatsiya qilish imkoniyatlari bilan tanishamiz.
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
                  Siz mijoz bilan suhbatlashish, loyiha uchun texnik <br />
                  topshiriq olish, maket ishlab chiqish va uni vizual <br />
                  tarzda taqdim etishni o‘rganasiz. Shuningdek, loyiha <br />
                  bo‘yicha chizmalar va 3D vizualizatsiya tayyorlashni <br />
                  o‘zlashtirasiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
                </h1>
                <h1 className="ml-7 mt-3">
                  Interyer dizayner mijoz bilan muloqot qilish, fikr va <br />
                  takliflarni tushunish, tanqidlarni to‘g‘ri qabul qilish va{" "}
                  <br />
                  yakuniy natijani samarali taqdim eta olish <br />
                  qobiliyatlariga ega bo‘lishi muhimdir.
                </h1>
              </div>
            </div>
          </div>
          <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
            <h1 className="text-4xl font-bold">
              Biz sizga Interyer Dizaynerning asosiy <br />
              ko'nikmalarini o'rgatamiz
            </h1>
            <div className="flex gap-3 mt-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-96 rounded-2xl px-4 py-[147px] h-full"
              >
                <Image
                  className="rounded-full w-32 h-32 mx-auto"
                  src={User}
                  alt=""
                />
                <h1 className="text-gray-400 text-center">Mentor</h1>
                <h1 className="text-3xl font-bold text-center">
                  Ism <br />
                  Familiya
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
                    Illustratorda interyer dizayn <br />
                    loyihalari uchun vizual <br />
                    yaratishingiz mumkin.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-28">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Interyer loyihalari uchun 3D <br />
                    vizualizatsiyalarni tayyorlash
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Murakkab interyer eskizlarini <br />
                    vektor formatida ishlab chiqish.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-20">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Rang palitrasi va uslubga mos <br />
                    materiallarni tanlashingiz <br />
                    mumkin.
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Interyer loyihaviy plakatlar <br />
                    ishlab chiqishingiz mumkin.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-28">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    3ds Max va After Effects <br />
                    yordamida interyer <br />
                    makonlarining dinamik <br />
                    vizualizatsiya
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Ko‘p sahifali texnik hujjatlar va <br />
                    taqdimotlar uchun maketlarni <br />
                    tayyorlashingiz mumkin.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-24">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Interyer dizayn loyihalarini <br />
                    video formatida taqdim eta
                    <br />
                    olishingiz mumkin.
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
              hh.uz ma'lumolatlariga ko'ra, Interyer Dizaynerning
              <br />
              o'rtacha ish haqi 9 500 000 tashkil qiladi
            </h1>
            <div className="flex gap-3 max-md:flex-col">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48 max-md:mt-10"
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
                <h1 className="text-4xl font-bold text-center">15 000 000</h1>
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
                  Kompozitsiya, tipografiya va <br />
                  interyer dizayn mahoratingizni <br />
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
          <Finishes />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
