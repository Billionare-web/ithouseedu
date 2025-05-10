"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Inter from "@/app/components/imgs/Interior-design-3.png";
import Interyer from "@/app/components/imgs/interyerdizayn.png";
import User from "@/app/components/imgs/user.png";
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
