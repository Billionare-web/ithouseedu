"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import AIai from "@/app/components/imgs/aiai.png";
import AI from "@/app/components/imgs/ai.png";
import Nodirbek from "@/app/components/imgs/Nodirbek.png";
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
            <h1 className="text-5xl font-bold max-md:text-4xl">
              AI, Suniy Intellekt
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:3xl">kursi</h1>
            <h1 className="mt-16">
              Noldan sun’iy intellekt mutaxassisiga aylaning. AI asoslari,
              neyron tarmoqlar, <br />
              mashinaviy o‘rganish, tabiiy tilni qayta ishlash va
              avtomatlashtirish tizimlarini <br />
              yaratishni o‘rganing. Kurs sizga tezda kasbga kirishga yordam
              beradi: siz AI <br />
              startaplarida, IT kompaniyalarda yoki tadqiqot markazlarida ishga
              joylashishingiz <br />
              yoki frilanser sifatida buyurtmalar qabul qilishingiz mumkin
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
            className="w-[600px] h-[600px] mt-20 max-md:hidden"
            src={AIai}
            alt="AI"
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">
            Sun’iy intellekt mutaxassisi nima qiladi?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Sun’iy intellekt bizning atrofimizda.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Shaxsiy yordamchilar, tavsiyalar tizimi, ovozli va matnli
            tarjimonlar, yuzni aniqlash texnologiyalari, <br />
            avtomatlashtirilgan marketing, chat-botlar va boshqa ko‘plab
            narsalar – bularning barchasi sun’iy intellekt <br />
            mutaxassislari tomonidan ishlab chiqilgan.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl max-w-full my-8"
            src={AI}
            alt="AI Suniy Intellekt"
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
                Sun’iy intellekt asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Biz mashg‘ulotimizni sun’iy intellektning ishlash <br />
                tamoyillari, ma’lumotlar tahlili, algoritmlar va model <br />
                yaratish asoslarini o‘rganishdan boshlaymiz. Biz sizning
                <br />
                mantiqiy fikrlash va texnik ko‘nikmalaringizni <br />
                rivojlantirishga yordam beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Sun’iy intellekt dasturiy ta’minoti
              </h1>
              <h1 className="ml-7 mt-3">
                Biz AI uchun asosiy vositalarni o‘rganamiz: Python, <br />
                TensorFlow, PyTorch, OpenAI, Google Colab va boshqa <br />
                texnologiyalar. Biz interfeys, kutubxonalar va model <br />
                yaratish imkoniyatlari bilan batafsil tanishamiz.
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
                Siz mijoz ehtiyojlarini tushunish, ma’lumotlarni to‘plash
                <br />
                va tozalash, modelni yaratish va uni optimallashtirish, <br />
                hamda natijani taqdim etish jarayonlarini o‘rganasiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Kasbda muvaffaqiyat qozonish uchun AI mutaxassisi <br />
                mijozlar bilan ishlash, murakkab tushunchalarni oddiy <br />
                qilib tushuntira olish, tahliliy fikrlash va kreativ <br />
                yondashuvni rivojlantirishi muhimdir
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga AI asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[147px] h-[434px]"
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
                <h1 className="flex gap-2 mt-5 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  AI algoritmlari va neyron <br />
                  tarmoqlar yaratish
                </h1>
                <h1 className="flex gap-2 mt-5 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Chatbot va avtomatlashtirish <br />
                  tizimlari ishlab chiqish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-5 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlarni tahlil qilish va <br />
                  bashorat qilish
                </h1>
                <h1 className="flex gap-2 mt-5 text-lg ml-20">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Tasvir, ovoz va tilni qayta <br />
                  ishlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-5 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  AI asosida vizual va video <br />
                  kontent yaratish
                </h1>
                <h1 className="flex gap-2 mt-5 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  AI yordamida videolarni <br />
                  tahrirlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-5 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Sun’iy intellekt orqali <br />
                  avtomatlashtirilgan vizual va <br />
                  video kontent yaratish
                </h1>
                <h1 className="flex gap-2 mt-5 text-lg ml-24">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  AI asosida ishlaydigan <br />
                  dasturlar va tizimlarni ishlab <br />
                  chiqish uchun kod yozish
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
