"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import Russia from "@/app/components/imgs/russia.png";
import Russa from "@/app/components/imgs/russa.png";
import Zuxra from "@/app/components/imgs/Zuxra.png";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Women from "@/app/components/imgs/Women.png";
import Bitir from "@/app/components/imgs/Bitir.png";
import Logo from "@/app/components/imgs/logo.png";
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
              <h1 className="text-5xl font-bold">Rus tili</h1>
              <h1 className="text-4xl mt-8 font-bold">kursi</h1>
              <h1 className="mt-16">
                Noldan Rus tili mutaxassisiga aylaning! Rus tili grammatikasi,
                so‘z boyligini oshirish, <br />
                muloqot qilish va yozish ko‘nikmalarini o‘rganing. Kurs sizga
                tezda kasbga kirishga <br />
                yordam beradi: siz rus tili o‘qituvchisi, tarjimon yoki
                frilanser sifatida turli loyihalar <br />
                ustida ishlashingiz mumkin.
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
              className="w-[500px] h-[500px] mt-20"
              src={Russia}
              alt=""
            />
          </div>
          <div className="pl-64 pr-24 mt-28">
            <h1 className="text-4xl font-bold">Rus tili nima uchun kerak?</h1>
            <h1 className="text-xl font-semibold mt-20">
              Rus tili mutaxassisi tilni o‘rganish, tarjima qilish va
              kommunikatsiya sohalarida faoliyat yuritadi.
            </h1>
            <h1 className="text-xl font-semibold mt-8">
              Matnlarni tarjima qilish, grammatika va stilni to‘g‘ri qo‘llash,
              til o‘rgatish va o‘quv materiallarini tayyorlash – <br />
              bularning barchasi rus tili mutaxassislarining asosiy
              vazifalaridandir. Masalan, rus tilida og‘zaki va yozma <br />
              muloqot qilish, akademik va professional matnlar yozish hamda
              ta’lim berish orqali tilni yanada rivojlantirish <br />
              uchun turli metodlardan foydalaniladi.
            </h1>
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="rounded-2xl max-w-full my-8"
              src={Russa}
              alt=""
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
                  Rus tili asoslari
                </h1>
                <h1 className="ml-7 mt-3">
                  Biz darslarimizni rus tili grammatikasi, lug‘at boyligini
                  <br />
                  oshirish va samarali muloqot qilish strategiyalaridan <br />
                  boshlaymiz. Sizning kreativ fikrlash qobiliyatingizni va
                  <br />
                  rus tilini o‘rganish mahoratingizni rivojlantirishga <br />
                  yordam beramiz. .
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Rus tili o‘rganish vositalari va platformalar
                </h1>
                <h1 className="ml-7 mt-3">
                  Biz rus tilini o‘rganish uchun asosiy resurslar va <br />
                  vositalarni o‘rganamiz: grammatik kitoblar, onlayn <br />
                  platformalar, til o‘rganish ilovalari va ta’lim veb- <br />
                  saytlari. Til o‘rganish usullari, talaffuzni <br />
                  takomillashtirish va muloqot qilish ko‘nikmalarini <br />
                  batafsil ko‘rib chiqamiz.
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
                  Siz rus tilida o‘qish, yozish, gapirish va <br />
                  tinglashni mashq qilasiz. Rus tilida insholar <br />
                  yozish, muhokamalarda ishtirok etish <br />
                  hamda yozma va og‘zaki nutqni <br />
                  rivojlantirish bo‘yicha mashg‘ulotlar olib <br />
                  boramiz.
                </h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="flex items-center gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-red-600 text-xl" />
                  Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
                </h1>
                <h1 className="ml-7 mt-3">
                  Rus tilini muvaffaqiyatli o‘rganish uchun boshqalar <br />
                  bilan muloqot qilish, fikrlaringizni aniq ifodalash, <br />
                  tanqidlarni qabul qilish va g‘oyalarni ishonchli tarzda <br />
                  taqdim etish muhimdir.
                </h1>
              </div>
            </div>
          </div>
          <div id="mentor" className="mt-40 bg-blue-50 px-64 py-20">
            <h1 className="text-4xl font-bold">
              Biz sizga Rus Tilini asosiy <br />
              ko'nikmalarini o'rgatamiz
            </h1>
            <div className="flex gap-3 mt-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-96 rounded-2xl px-4 py-[147px] h-[516px]"
              >
                <Image
                  className="rounded-full w-32 h-32 mx-auto"
                  src={Zuxra}
                  alt=""
                />
                <h1 className="text-gray-400 text-center">Mentor</h1>
                <h1 className="text-3xl font-bold text-center">
                  Zuxra <br />
                  Ustoz
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="shadow-2xl w-full rounded-2xl px-10 py-10 h-full"
              >
                <h1 className="text-gray-400">Ko'nikmalar</h1>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Grammatika, so‘z boyligini <br />
                    oshirish va gap tuzishni <br />
                    o‘rganamiz.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-28">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />{" "}
                    Nutq va tinglash ko‘nikmalarini <br />
                    rivojlantirish
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Rus tilida yozish va og‘zaki <br />
                    muloqotni takomillashtiramiz, <br />
                    aniq va ravon ifodalashni <br />
                    o‘rganamiz.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-20">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Ijtimoiy tarmoqlar uchun <br />
                    optimallashtirilgan reklama <br />
                    kampaniyalarini yaratish
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Rus tili grammatikasini o‘rganib, <br />
                    so‘z boyligini kengaytirishga <br />
                    yordam beramiz.
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-16">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Rus tilida o‘qish va matnlarni <br />
                    tahlil qilish ko‘nikmalari.
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex gap-2 mt-3 text-lg">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Rus tilida professional <br />
                    yozuvlarni ko‘nikmalarini <br />
                    o‘rgatamiz
                  </h1>
                  <h1 className="flex gap-2 mt-3 text-lg ml-32">
                    <IoIosCheckmarkCircle className="text-green-500 text-xl mt-1" />
                    Suhbatlashish va muloqot qilish <br />
                    ko‘nikmalarini oshiramiz.
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
              hh.uz ma'lumolatlariga ko'ra, Rus TIli mutaxassisi
              <br />
              o'rtacha ish haqi 9 500 000 tashkil qiladi
            </h1>
            <div className="flex gap-3">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-gray-200 rounded-3xl py-5 px-5 w-full mt-48"
              >
                <h1 className="text-4xl font-bold text-center">7 000 000</h1>
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
                <h1 className="text-4xl font-bold text-center">20 000 000</h1>
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
                <h1 className="text-4xl font-bold text-center">32 000 000</h1>
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
              Biz Rus TIli yo'nalishini shu narsalarni istagan o'quvchilar uchun
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
                  Bilimlarni tizimlashtirish va Rus Tilini o'z kasbingiz qiling
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Asosiy bilimlaringizni <br />
                  chuqurlashtiring
                </h1>
                <h1 className="flex mt-6 gap-2">
                  <FaCheck />
                  Rus tilida so'zlash <br />
                  mahoratingizni oshiring.
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
