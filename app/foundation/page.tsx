"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Found from "@/app/components/imgs/Foundation-3.png";
import MS from "@/app/components/imgs/ms.png";
import Mahmudjon from "@/app/components/imgs/Mahmud.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Word from "@/app/components/imgs/word2.png";
import Excel from "@/app/components/imgs/excel.png";
import PowerPoint from "@/app/components/imgs/power.png";
import Canva from "@/app/components/imgs/canva.png";
import Footer from "../components/footer";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from "../navbar";
import Contact from "@/app/contact/page";
import Finishes from "@/app/finishes/page";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Levels from "./levels";
import Course from "./course";

interface UrlData {
  id: string;
  url: string;
  [key: string]: any; 
}

const getDoc = async (): Promise<UrlData[]> => {
  try {
    const collectionRef =  collection(db, 'url');
    const querySnapshot = await getDocs(collectionRef);
    const data =  querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as UrlData[];

    return data;
  } catch (error) {
    console.log(error);
    return []; 
  }
};

function Page() {
  const [data, setData] = useState<UrlData[]>([]);
console.log(data);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Umumiy animatsiya davomiyligi
      easing: "ease-out", // Sekin chiqish effekti
      once: true, // Bir marta ishga tushishi uchun
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDoc(); 
      setData(result); 
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex pl-56 max-md:pl-5 pr-24 max-md:pr-6 justify-between bg-blue-50 pb-20 w-full h-full">
          <div className="mt-36 max-md:w-full">
            <h1 className="text-5xl font-bold">Foundation</h1>
            <h1 className="text-4xl font-bold mt-5">
              (Kompyuter Savodxonligi)
            </h1>
            <h1 className="text-4xl mt-8 font-bold">kursi</h1>
            <h1 className="mt-16">
              Kompyuter savodxonligi – zamonaviy texnologiyalar bilan ishlash
              ko‘nikmalarini o‘z <br />
              ichiga oladi. Bu fan kompyuterning asosiy qismlari, operatsion
              tizimlar, ofis <br />
              dasturlari, internetdan foydalanish, ma’lumotlarni saqlash va
              xavfsizlik choralari kabi <br />
              mavzularni o‘rgatadi. Kompyuter savodxonligi har qanday sohada
              ishlash uchun <br />
              muhim bo‘lib, kundalik hayotda ham foydalidir.
            </h1>
            <div className="flex items-center gap-5 mt-14">
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" width={50} height={50}  src={Word} alt="word_image" />

                <span className="max-md:hidden">Word</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" src={Excel} alt="" />
                <span className="max-md:hidden">Excel</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7" src={PowerPoint} alt="" />
                <span className="max-md:hidden">PowerPoint</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <Image className="w-7 h-7 rounded-sm" src={Canva} alt="" />
                <span className="max-md:hidden">Canva</span>
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
            src={Found}
            alt="Interior Design"
          />
        </div>
        <div className="pl-64 max-md:pl-5 pr-24 max-md:pr-5 mt-28">
          <h1 className="text-4xl font-bold">
            Kompyuter Savodxonligi nima uchun muhim?
          </h1>
          <h1 className="text-xl font-semibold mt-20">
            Zamonaviy dunyoda kompyuter savodxonligi har bir inson uchun zarur.
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Elektron pochta, matn muharrirlari, internetda qidiruv, fayllarni
            boshqarish, kiberxavfsizlik choralari, bulutli <br />
            texnologiyalar va dasturiy ta’minotdan samarali foydalanish –
            bularning barchasi kompyuter savodxonligi <br />
            ko‘nikmalariga kiradi.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-2xl max-w-full w-[1000px] my-8"
            src={MS}
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
                Kompyuter savodxonligi asoslari
              </h1>
              <h1 className="ml-7 mt-3">
                Mashg‘ulotlarimizni kompyuter tizimlarining asoslari, <br />
                ma’lumotlar strukturalari, operatsion tizimlar va <br />
                algoritmlarni o‘rganishdan boshlaymiz. Sizning <br />
                mantiqiy fikrlash va texnik ko‘nikmalaringizni <br />
                rivojlantirishga yordam beramiz.
              </h1>
            </div>
            <div
              className="max-md:mt-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />{" "}
                Dasturiy ta’minot bilan ishlash
              </h1>
              <h1 className="ml-7 mt-3">
                Asosiy dasturiy vositalarni o‘rganamiz: Windows va <br />
                Linux operatsion tizimlari, Microsoft Office, Google <br />
                Docs, internet xavfsizligi, fayl tizimlari va bulutli <br />
                texnologiyalar. Biz interfeys, dasturlar va ularning <br />
                imkoniyatlari bilan batafsil tanishamiz.
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
                Siz elektron pochta bilan ishlash, hujjatlar yaratish, <br />
                ma’lumotlarni tartibga solish, tizimni optimallashtirish
                <br />
                va xavfsiz saqlash jarayonlarini o‘rganasiz.
              </h1>
            </div>
            <div
              className="max-md:mt-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="flex items-center gap-2 font-bold">
                <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
              </h1>
              <h1 className="ml-7 mt-3">
                Muvaffaqiyatli bo‘lish uchun foydalanuvchi <br />
                texnologiyalarni tushunishi, muammolarni hal qila <br />
                olishi, samarali muloqot va kreativ yondashuvni <br />
                rivojlantirishi muhimdir.
              </h1>
            </div>
          </div>
        </div>
        <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20 max-md:px-5">
          <h1 className="text-4xl font-bold">
            Biz sizga Kompyuter Savodxonligini asosiy <br />
            ko'nikmalarini o'rgatamiz
          </h1>
          <div className="flex gap-3 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-2xl w-96 rounded-2xl px-4 py-[75px] h-full"
            >
              <Image
                className="rounded-full w-32 h-32 mx-auto"
                src={Mahmudjon}
                alt=""
              />
              <h1 className="text-gray-400 text-center">Mentor</h1>
              <h1 className="text-3xl font-bold text-center">
                Mahmudjon <br />
                Naimjonov
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
                  Dasturlar va tizimlar bilan <br />
                  ishlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-28">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                  Avtomatlashtirish va qulaylik
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Ma’lumotlar bilan ishlash
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[115px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Grafik va video tahrirlash
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Dasturlash asoslari
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[166px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Internet xavfsizligi
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex gap-2 mt-8 text-lg">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Kompyuter va operatsion tizimlar
                </h1>
                <h1 className="flex gap-2 mt-8 text-lg ml-[52px]">
                  <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                  Internet va onlayn xizmatlar
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
