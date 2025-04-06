"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import Back from "@/app/components/imgs/back-3.png";
import Web from "@/app/components/imgs/webdev.png";
import Jonibek from "@/app/components/imgs/Jonibek.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import Women from "@/app/components/imgs/Women.png";
import Bitir from "@/app/components/imgs/Bitir.png";
import Logo from "@/app/components/imgs/logo.png";
import Navbar from "../navbar";
import Footer from "../components/footer";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Kids() {
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
      <div className="">
        <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:pl-5 max-md:pr-7">
          <div className="mt-36">
            <h1 className="text-5xl font-bold max-md:text-4xl">
              Web Dasturlash
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl max-md:mt-5">
              (Backend)
            </h1>
            <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
            <h1 className="mt-16">
              Web backend dasturchi – bu veb-sayt yoki ilovaning server qismini
              ishlab chiqadigan <br />
              mutaxassis. U foydalanuvchilar ko‘ra olmaydigan, lekin butun
              tizimning ishlashini <br />
              ta’minlaydigan qism ustida ishlaydi. Backend dasturchilar
              ma’lumotlar bazasi, <br />
              autentifikatsiya, server logikasi va API integratsiyasi bilan
              shug‘ullanadi.
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
            src={Back}
            alt="Backend"
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
                <IoIosCheckmarkCircle className="text-red-600 text-xl" /> Web
                dasturlash asoslari
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
                Asosiy web backend texnologiyalarini o‘rganamiz: <br />
                Node.js, PHP (Laravel), Python (Django), MySQL, <br />
                PostgreSQL va MongoDB. Shuningdek, serverlar, kod <br />
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
                ko‘nikmalarini rivojlantirish muhimdir.
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
              className="shadow-2xl w-96 rounded-2xl px-4 py-24 h-[473px]"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Jonibek}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Jonibek <br />
                Turapov
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
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Backend dasturlash
                </h1>
                <h1 className="flex gap-2 mt-9 ml-28 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  API yaratish va xavfsizlik <br />
                  asoslarini tushuntiramiz.
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar bazasi bilan <br />
                  ishlash
                </h1>
                <h1 className="flex gap-2 mt-9 ml-[71px] text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Web avtomatlashtirish
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Frontend bilan integratsiyani <br />
                  o‘rganamiz.
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-10">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Internet xavfsizligi
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-9 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Hosting va deploy
                </h1>
                <h1 className="flex gap-2 mt-9 text-lg ml-[122px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Versiyalarni boshqarish va <br />
                  jamoada ishlash
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
            hh.uz ma'lumolatlariga ko'ra, Web Backend mutaxassisi
            <br />
            o'rtacha ish haqi 6 500 000 tashkil qiladi
          </h1>
          <div className="flex gap-3 max-md:flex-col">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48 max-md:mt-10"
            >
              <h1 className="text-4xl font-bold text-center">5 000 000</h1>
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
              <h1 className="text-4xl font-bold text-center">15 000 000</h1>
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
              <h1 className="text-4xl font-bold text-center">30 000 000</h1>
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

export default Kids;
