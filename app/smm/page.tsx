"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import SMM from "@/app/components/imgs/smm-3.png";
import Social from "@/app/components/imgs/social.png";
import Ism from "@/app/components/imgs/Ism.png";
import Instagram from "@/app/components/imgs/Instagram.png";
import Youtube from "@/app/components/imgs/Youtube.png";
import TIkTok from "@/app/components/imgs/tiktok.png";
import Telegram from "@/app/components/imgs/telegram.png";
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
            <h1 className="text-5xl font-bold max-md:text-4xl">SMM</h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              SMM (Social Media Marketing) menejerining asosiy vazifasi brend
              yoki tashkilotning <br />
              ijtimoiy tarmoqlardagi faoliyatini yuritish va rivojlantirishdir.
              Quyidagi asosiy vazifalar <br />
              SMM menejerga tegishli
            </h1>
            <div className="flex items-center gap-5 mt-14">
              <h1 className="flex items-center gap-2">
                <Image className="w-9 h-9" src={Instagram} alt="" />
                <span className="max-md:hidden">Instagram</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-9 h-9" src={Youtube} alt="" />
                <span className="max-md:hidden">Youtube</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-9 h-9" src={TIkTok} alt="" />
                <span className="max-md:hidden">TikTok</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-9 h-9" src={Telegram} alt="" />
                <span className="max-md:hidden">Telegram</span>
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
            className="w-[500px] h-[500px] mt-20 max-md:hidden"
            src={SMM}
            alt="SMM Img"
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">SMM mutaxassisi nima qiladi?</h1>
          <h1 className="text-xl font-semibold mt-20">
            SMM mutaxassisi ijtimoiy tarmoqlarda brendni rivojlantirish va
            marketing kampaniyalarini boshqarish bilan shug‘ullanadi.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Kontent yaratish, auditoriyani jalb qilish, reklama kampaniyalarini
            amalga oshirish, tahlil qilish va hisobotlar
            <br />
            tayyorlash – bularning barchasi SMM mutaxassislari tomonidan amalga
            oshiriladi. Masalan, Facebook, <br />
            Instagram, Twitter va boshqa ijtimoiy tarmoqlarda brendning imijini
            yaratish, target reklama yaratish va <br />
            foydalanuvchilar bilan muloqot qilish uchun turli vositalar va
            texnikalardan foydalaniladi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl w-[1000px] mt-8"
            src={Social}
            alt=""
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
                Kompozitsiya, algoritmlar va SMM asoslari{" "}
              </h1>
              <h1 className="ml-7 mt-3">
                Biz mashg‘ulotimizni ijtimoiy tarmoqlarda marketing <br />
                strategiyalari, kontent yaratish va auditoriya bilan <br />
                muloqot qilish asoslaridan boshlaymiz. Biz sizning <br />
                kreativ fikrlash qobiliyatingizni va SMM strategiyalarini
                <br />
                ishlab chiqish mahoratingizni oshirishga yordam <br />
                beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" /> SMM
                vositalari va platformalar{" "}
              </h1>
              <h1 className="ml-7 mt-3">
                Biz SMM uchun asosiy platformalar va vositalarni <br />
                o‘rganamiz: Instagram, Facebook, Twitter, LinkedIn va <br />
                TikTok. Biz analitika vositalari, reklamalar yaratish, <br />
                kontent rejalashtirish va tahlil qilishni batafsil ko‘rib
                <br />
                chiqamiz.
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
                Siz kontent yaratishingiz, target reklamalar yaratish, <br />
                tahlil qilish va hisobotlar tayyorlash, brend <br />
                strategiyasini ishlab chiqish va amalga oshirishingiz <br />
                kerak.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Kasbda muvaffaqiyat qozonish uchun SMM <br />
                mutaxassisi mijozlar bilan ishlash, auditoriyaga mos <br />
                kontent yaratish, tanqidlar bilan ishlay olish va <br />
                natijalarni aniq taqdim etish muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-24 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga SMMning asosiy <br />
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
                src={Ism}
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
              className="shadow-2xl w-full rounded-2xl px-10 py-[53px] h-full max-md:hidden"
            >
              <h1 className="text-gray-400">Ko'nikmalar</h1>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Ma’lumotlarni tahlil qilish va <br />
                  vizualizatsiyalar yaratish
                </h1>
                <h1 className="flex gap-2 mt-9 ml-28 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Statik va dinamik ma’lumotlar <br />
                  tahlilini amalga oshirish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Kontent yaratish va joylash
                </h1>
                <h1 className="flex gap-2 mt-9 ml-[115px] text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Auditoriya bilan ishlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Tahlil va optimizatsiya
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-[167px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Reklama va targ‘ibot
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Brend imidjini shakllantirish.
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-[117px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Yangiliklardan xabardor bo‘lish
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
