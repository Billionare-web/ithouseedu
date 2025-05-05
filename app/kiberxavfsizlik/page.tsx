"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Cyber from "@/app/components/imgs/cybersecurity-3.png";
import Cyber2 from "@/app/components/imgs/cyber.png";
import Temurbek from "@/app/components/imgs/temurbek.png";
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
      <div>
        <Navbar />
        <div>
          <div className="flex pl-56 pr-24 justify-between bg-blue-50 pb-20 w-full h-full max-md:pl-5 max-md:pr-7">
            <div className="mt-36">
              <h1 className="text-5xl font-bold max-md:text-4xl">
                Kiberxavfsizlik
              </h1>
              <h1 className="text-4xl mt-8 font-bold max-md:text-3xl">kursi</h1>
              <h1 className="mt-16">
                Kiberxavfsizlik – bu kompyuterlar, tarmoqlar va ma’lumotlarni
                turli tahdidlardan <br />
                himoya qilish jarayoni. Internetda xakerlar, zararli dasturlar
                va firibgarlar odamlarning <br />
                shaxsiy ma’lumotlarini o‘g‘irlash yoki tizimlarni buzishga
                harakat qilishadi. Bunga yo‘l <br />
                qo‘ymaslik uchun kuchli parollar ishlatish, dasturlarni yangilab
                turish va antivirus kabi <br />
                xavfsizlik vositalaridan foydalanish muhim. Agar
                kiberxavfsizlikka e’tibor berilmasa, <br />
                ma’lumotlar yo‘qolishi, moliyaviy zarar yoki hattoki butun tizim
                ishdan chiqishi <br />
                mumkin. Shuning uchun hamma internetdan foydalanganda ehtiyot
                choralarini <br />
                ko‘rishi kerak.
              </h1>
              <h1 className="flex items-center gap-2 mt-14">
                <FaCheck className="text-red-600" />0 dan boshlab kasb
                darajasigacha
              </h1>
              <h1 className="flex items-center gap-2">
                <FaCheck className="text-red-600" /> SHaftada 4 kun 1.5 - 2
                soatdan offline darslar
              </h1>
              <h1 className="flex items-center gap-2">
                <FaCheck className="text-red-600" />
                Telegram guruhlarda darslik materiallari domiy ravishda tashab
                boriladi
              </h1>
              <h1 className="flex items-center gap-2">
                <FaCheck className="text-red-600" />
                Har oy amaliy shakldagi imtihonlar
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
              src={Cyber}
              alt=""
            />
          </div>
          <div className="pl-64 pr-24 mt-28 max-md:pl-5 max-md:pr-7">
            <h1 className="text-4xl font-bold">
              Kiberxavfsizlik mutaxassisi nima qiladi?
            </h1>
            <h1 className="text-xl font-semibold mt-20">
              Kiberxavfsizlik mutaxassisi tizimlar va ma’lumotlarni
              kiberxavflardan himoya qilish bilan shug‘ullanadi.
            </h1>
            <h1 className="text-xl font-semibold mt-8">
              Kiberxavfsizlik mutaxassisi – bu kompyuter tizimlari va
              ma’lumotlarni xakerlardan, viruslardan va <br />
              firibgarlardan himoya qiladigan mutaxassis. U tarmoqlarni sinab
              ko‘radi, zaif joylarni topadi va ularni <br />
              mustahkamlaydi, shuningdek, hujumlarning oldini olish uchun turli
              xavfsizlik choralari ko‘radi. Ba’zan ular <br />
              xakerlar kabi fikrlab, tizimlarga hujum qilib ko‘rishadi, lekin
              buning hammasi himoyani yaxshilash uchun! Bu <br />
              kasb doimiy ravishda o‘rganishni, yechim izlashni va
              texnologiyalar bilan ishlashni talab qiladi. Agar sen IT va <br />
              xavfsizlikga qiziqsang, bu juda qiziqarli va talabgir kasb
              bo‘lishi mumkin!
            </h1>
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="rounded-2xl max-w-full my-8"
              src={Cyber2}
              alt=""
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
                  Boshlang'ich tushunchalar, Linux operatsion <br />
                  tizimi, Tarmoq protokollari
                </h1>
                <h1 className="ml-7 mt-3">
                  Ethical hacker bo'lishni hohlagan har bir xodim bilishi <br />
                  zarur bo'lgan fundamental bilimlar, Linux operatsion <br />
                  tizimini to'liq boshqarishni o'rganib bash scripting <br />
                  yordamida vazifalarni avtomatlashtirib linuxda ishlash <br />
                  samaradorligingizni oshirasiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Amaliy ko'nikmalar
                </h1>
                <h1 className="ml-7 mt-3">
                  Siz darslar jarayonida 15 dan ortiq kiberhujumlarni <br />
                  qanday amalga oshirishni va qanday ulardan <br />
                  himoyalanishni ham ko'rib chiqasiz. Bularni barchasi <br />
                  simulatsiya qilib ko'rsatiladi.
                </h1>
              </div>
            </div>
            <div className="flex mt-12 justify-between max-md:flex-col">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Kiberxavfsizlikdagi talab yuqori bo'lgan 5 ta <br />
                  yunalish
                </h1>
                <h1 className="ml-7 mt-3">
                  Cyber Security Specialist, Penetration Tester(Pentester),
                  <br />
                  Digital Forensics Analyst, Network Security Engineer, <br />
                  Threat Intelligence Analyst, bo'yicha asosiy bilimlarga <br />
                  ega bo'lasiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Kasbiy faoliyatda muvaffaqiyat qozonish
                </h1>
                <h1 className="ml-7 mt-3">
                  Sizga yaxshi kadr bo'lishingiz uchun kerak asosiy <br />
                  kunikmalarni o'rganasiz, mijozlar bilan ishlash, tanqidiy
                  <br />
                  fikrlash, tez qaror qabul qilish shular jumlasidandir. Va
                  <br />
                  yana kiberxavsizlikning huquqiy jihatlarini ham <br />
                  o'rganasiz.
                </h1>
              </div>
            </div>
          </div>
          <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
            <h1 className="text-4xl font-bold">
              Biz sizga Kiberxavfsizlikning asosiy <br />
              ko'nikmalarini o'rgatamiz
            </h1>
            <div className="flex gap-3 mt-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-96 rounded-2xl px-4 py-[147px] h-[456px]"
              >
                <Image
                  className="rounded-full w-32 h-32 mx-auto"
                  src={Temurbek}
                  alt=""
                />
                <h1 className="text-gray-400 text-center">Mentor</h1>
                <h1 className="text-3xl font-bold text-center">
                  Temurbek <br />
                  Yorkulov
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-full rounded-2xl px-10 pt-10 pb-32 h-full max-md:hidden"
              >
                <h1 className="text-gray-400">Ko'nikmalar</h1>
                <div className="flex">
                  <h1 className="flex gap-2 mt-6 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Full Stack Web Developer
                  </h1>
                  <h1 className="flex gap-2 mt-6 text-lg ml-28">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Kiberxavfsizlikda suniy intellekt <br />
                    imkoniyatlaridan foydalanish
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-6 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Linux tizimlari boshqaruvi
                  </h1>
                  <h1 className="flex gap-2 mt-6 text-lg ml-28">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Tarmoq xavfsizligini taminlash
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-6 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Penetration Tester
                  </h1>
                  <h1 className="flex gap-2 mt-6 text-lg ml-44">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Thread Intelligence Analyst
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-6 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Malumotlar bazasi tuzilmalarini <br />
                    boshqarish
                  </h1>
                  <h1 className="flex gap-2 mt-6 text-lg ml-20">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Code Review
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
              Biz Kiberxavfsizlikni shu narsalarni istagan o'quvchilar uchun
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
                  0 Dan o'rganmoqchi bo'lganlar uchun
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Boshlash uchun texnik bilim <br />
                  talab etilmaydi
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Barcha hujum va ximoya <br />
                  usullar amaliy tarzda <br />
                  o'rgatiladi
                </h1>
                <h1 className="flex mt-6 pb-12 gap-2">
                  <FaCheck />
                  Hozirgi kundagi eng dolzarb <br />
                  methodlarga ega bo'ling
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
              >
                <Image className="rounded-full w-24 h-24" src={Boy} alt="" />
                <h1 className="text-xl font-bold mt-4">
                  Kasbini o'zgartirib zamonaviy va <br />
                  talabgir yunalishni o'rganmoqchi <br />
                  bo'lganlar uchun
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Kelajak kasbini egallang
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Ish topish imkoniyatlari keng
                </h1>
                <h1 className="flex mt-6 pb-12 gap-2">
                  <FaCheck />
                  Masofaviy va mustaqil ishlash <br />
                  imkoniyati
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
              >
                <Image className="rounded-full w-24 h-24" src={Women} alt="" />
                <h1 className="text-xl font-bold mt-4">Biznes egalari uchun</h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  O'z biznesingizni o'zingiz <br />
                  himoya qiling
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Kiberhujumlar orqali moliyaviy <br />
                  yuqotishlarni oldini oling
                </h1>
                <h1 className="flex mt-6 pb-12 gap-2">
                  <FaCheck />
                  Mijozlarning maxfiy <br />
                  malumotlarini himoya qilishni <br />
                  o'rganing
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
