"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Front from "@/app/components/imgs/front-3.png";
import Web from "@/app/components/imgs/webdev.png";
import Jaloliddin from "@/app/components/imgs/Jaloliddin.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Women from "@/app/components/imgs/Women.png";
import HTML from "@/app/components/imgs/html.png";
import CSS from "@/app/components/imgs/css.png";
import JS from "@/app/components/imgs/js.png";
import Footer from "../components/footer";
import Contact from "../contact/page";
import Finishes from "../finishes/page";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from "../navbar";
import Levels from "./levels";

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
              Web Dasturlash
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl max-md:mt-">
              (Frontend)
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              Web dasturchi saytlar va ilovalarni yaratadi. Frontend – HTML,
              CSS, JavaScript <br />
              bilan interfeys tayyorlaydi. Backend – PHP, Node.js yoki Python
              bilan server qismini <br />
              ishlab chiqadi. Ma’lumotlar bazasi va API bilan ishlaydi,
              xavfsizlik va optimizatsiyani <br />
              ta’minlaydi.
            </h1>
            <div className="flex items-center gap-5 mt-14">
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7 rounded-sm" src={HTML} alt="" />
                <span className="max-md:hidden">HTML</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7 rounded-sm" src={CSS} alt="" />
                <span className="max-md:hidden">CSS</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7 rounded-sm" src={JS} alt="" />
                <span className="max-md:hidden">JavaScript</span>
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
            src={Front}
            alt="FrontEnd"
          />
        </div>
        <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
          <h1 className="text-4xl font-bold">
            Web dasturlash nima uchun kerak?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Zamonaviy dunyoda web saytlar har bir inson uchun muhim ko‘nikma.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Web Fullstack dasturlash – frontend va backend texnologiyalarini o‘z
            ichiga oladi. HTML, CSS, JavaScript orqali <br />
            interfeys yaratiladi, backend esa PHP, Node.js yoki Python bilan
            ishlaydi. Ma’lumotlar bazasi sifatida MySQL <br />
            yoki MongoDB qo‘llaniladi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl max-w-full w-[1000px] my-8"
            src={Web}
            alt="FrontEnd Web"
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
                Web dasturlash asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Mashg‘ulotlarimizni web texnologiyalarining asoslari, <br />
                veb-sahifa tuzilishi, server va mijoz tomonidagi <br />
                dasturlashni o‘rganishdan boshlaymiz. Sizning <br />
                mantiqiy fikrlash va texnik ko‘nikmalaringizni <br />
                rivojlantirishga yordam beramiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Dasturiy vositalar bilan ishlash
              </h1>
              <h1 className="ml-7 mt-3">
                Asosiy web dasturlash texnologiyalarini o‘rganamiz: <br />
                HTML, CSS, JavaScript, Node.js, hamda brauzerlar, kod <br />
                muharrirlari va bulutli xizmatlar bilan ishlashni <br />
                tushuntiramiz.
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
                Siz veb-sayt yaratish, foydalanuvchi interfeysini <br />
                loyihalash, ma’lumotlarni tartibga solish va xavfsiz <br />
                ishlash bo‘yicha muhim ko‘nikmalarga ega bo‘lasiz.
              </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Muvaffaqiyatli web dasturchi bo‘lish uchun <br />
                muammolarni hal qilish, mijoz bilan samarali muloqot <br />
                qilish, kreativ yondashuv va doimiy o‘rganish <br />
                ko‘nikmalarini rivojlantirish muhimdir. 🚀
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga Kompyuter Savodxonligining asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[102px] h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Jaloliddin}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Jaloliddin <br />
                Abdurahmonov
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
                  Frontend dasturlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-44">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Web saytlarning dizaynini <br />
                  noldan o'rganish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar bazasi bilan <br />
                  ishlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-36">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Web avtomatlashtirish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Grafik va UI dizayn
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-48">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Internet xavfsizligi
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Hosting va deploy
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[196px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Versiyalarni boshqarish va <br />
                  jamoada ishlash
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Levels />
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

export default Page;
