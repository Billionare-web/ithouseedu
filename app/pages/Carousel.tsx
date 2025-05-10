"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Front from "@/app/components/imgs/front-3.png";
import Back from "@/app/components/imgs/back-3.png";
import AI from "@/app/components/imgs/ai-3.png";
import Grafik from "@/app/components/imgs/grafik-3.png";
import Phyton from "@/app/components/imgs/phyton.png";
import Kyber from "@/app/components/imgs/cybersecurity-3.png";
import Found from "@/app/components/imgs/Foundation-3.png";
import Ingliz from "@/app/components/imgs/Ingliz.png";
import Rus from "@/app/components/imgs/rus.png";
import Math from "@/app/components/imgs/math.png";
import FoundKids from "@/app/components/imgs/Foundkids.png";
import SMM from "@/app/components/imgs/smm-3.png";
import Inter from "@/app/components/imgs/Interior-design-3.png";
import Choise from "@/app/components/imgs/choice.png";
import Study from "@/app/components/imgs/study.png";
import Certik from "@/app/components/imgs/certik.png";
import Counter from "@/app/components/ui/counter";
import { PiCursorFill } from "react-icons/pi";
import TypePerson from "@/app/components/imgs/typeperson.png";
import Cap from "@/app/components/imgs/cap.png";
import Prize from "@/app/components/imgs/prize.png";
import Coins from "@/app/components/imgs/coins.png";
import Tasks from "@/app/components/imgs/task.png";
import Contact from "../contact/page";
import Certificate from "@/app/components/imgs/certifikate.png";
import Teachers from "@/app/pages/teachers";

const items = [   
  {
    title: "Web Frontend",
    text: "ni o‘rganing va web saytlarning dizaynini kashf qiling!",
    img: Front,
    width: 500, // Kattalikni qo'shish
    height: 400, // Kattalikni qo'shish
  },
  {
    title: "Web Backend",
    text: "ni o‘rganing va web saytlarning ichki qismlari bilan ishlang!",
    img: Back,
    width: 400, // Kattalikni qo'shish
    height: 300, // Kattalikni qo'shish
  },
  {
    title: "AI",
    text: "ni o‘rganing va sun'iy intellekt bilan yangi imkoniyatlarni kashf qiling!",
    img: AI,
    width: 350, // Kattalikni qo'shish
    height: 250, // Kattalikni qo'shish
  },
  {
    title: "Grafik Dizaynerlik",
    text: "ni biz bilan o‘rganing va dizayn sohasida yangi ufqlarga yo‘l oching!",
    img: Grafik,
    width: 450, // Kattalikni qo'shish
    height: 350, // Kattalikni qo'shish
  },
  {
    title: "Kiberxavfsizlik",
    text: "ni o‘rganing va xavfsizlik imkoniyatlarini kashf qiling!",
    img: Kyber,
    width: 450, // Kattalikni qo'shish
    height: 350, // Kattalikni qo'shish
  },
  {
    title: "Foundation",
    text: "ni o‘rganing va kompyuterning asosini bilib oling!",
    img: Found,
    width: 550, // Kattalikni qo'shish
    height: 450, // Kattalikni qo'shish
  },
  {
    title: "SMM",
    text: "ni biz bilan o‘rganing va brendingizni rivojlantiring!",
    img: SMM,
    width: 500, // Kattalikni qo'shish
    height: 300, // Kattalikni qo'shish
  },
  {
    title: "Interyer Dizayn",
    text: "ni biz bilan o‘rganing – kelajagingiz uchun qadam bosing!",
    img: Inter,
    width: 500, // Kattalikni qo'shish
    height: 400, // Kattalikni qo'shish
  },
];

const courses = [
  {
    id: 1,
    name: "Foundation",
    duration: "2 oy",
    image: Found,
    description:
      "Foundation – bu kompyuterdan to‘g‘ri foydalanish, fayllar bilan ishlash, internet xavfsizligi va ofis dasturlaridan foydalanish ko‘nikmalaridir.",
  },
  {
    id: 2,
    name: "Grafik Dizayn",
    duration: "6 oy",
    image: Grafik,
    description:
      "Grafik dizayn – bu tasvir, rang va shriftlar yordamida ma’lumotni estetik va ta’sirli tarzda yetkazish san’ati. U reklama, brending va digital kontent yaratishda muhim rol o‘ynaydi.",
  },
  {
    id: 3,
    name: "Web Frontend",
    duration: "7 oy",
    image: Front,
    description:
      "Web frontend — bu veb-saytning foydalanuvchi ko‘radigan qismidir. Frontend dasturchilar foydalanuvchi interfeysini yaratadi va foydalanuvchi tajribasini ta’minlaydi.",
  },
  {
    id: 4,
    name: "Web Backend",
    duration: "6 oy",
    image: Back,
    description:
      "Web backend — bu server tomonida ishlaydigan qism bo‘lib, ma’lumotlarni saqlash, qayta ishlash va foydalanuvchining so‘rovlariga javob berishni ta’minlaydi.",
  },
  {
    id: 5,
    name: "AI",
    duration: "6 oy",
    image: AI,
    description:
      "Sun’iy intellekt (AI) – bu mashinalarning o‘z-o‘zidan o‘rganishi, tahlil qilishi va aqlli qarorlar qabul qilishi imkonini beruvchi texnologiya. U robototexnika, ma’lumotlar tahlili va avtomatlashtirishda qo‘llaniladi.",
  },
  {
    id: 6,
    name: "Phyton",
    duration: "3 oy",
    image: Phyton,
    description:
      "Python – sodda va kuchli dasturlash tili bo‘lib, veb-ishlanmalar, sun’iy intellekt, ma’lumotlar tahlili va avtomatlashtirishda keng qo‘llaniladi. ",
  },
  {
    id: 7,
    name: "Kiberxavfsizlik",
    duration: "11 oy",
    image: Kyber,
    description:
      "Kiberxavfsizlik – ma’lumotlarni himoya qilish va kiberhujumlarning oldini olishga qaratilgan texnologiyalar va usullar majmuasi.  ",
  },
  {
    id: 8,
    name: "Ingliz tili",
    duration: "8 oy",
    image: Ingliz,
    description:
      "Ingliz tili – xalqaro muloqot, ta’lim va biznes tili bo‘lib, dunyoning ko‘plab mamlakatlarida qo‘llaniladi.",
  },
  {
    id: 9,
    name: "Rus Tili",
    duration: "6 oy",
    image: Rus,
    description:
      "Rus tili – dunyoda keng tarqalgan va MDH davlatlarida asosiy tillardan biri bo‘lib, biznes, ta’lim va madaniyat sohalarida qo‘llaniladi.",
  },
  {
    id: 10,
    name: "Matematika",
    duration: "5 oy",
    image: Math,
    description:
      "Matematika – mantiqiy fikrlash va muammolarni hal qilishga asoslangan fan bo‘lib, hisob-kitob, algebra, geometriya va tahlilni o‘z ichiga oladi.",
  },
  {
    id: 11,
    name: "Foundation Kids",
    duration: "6 oy",
    image: FoundKids,
    description:
      "Foundation – bu kompyuterdan to‘g‘ri foydalanish, fayllar bilan ishlash, internet xavfsizligi va ofis dasturlaridan foydalanish ko‘nikmalaridir.",
  },
  {
    id: 12,
    name: "SMM",
    duration: "3 oy",
    image: SMM,
    description:
      "SMM (Social Media Marketing) – ijtimoiy tarmoqlarda brendni targ‘ib qilish, auditoriya bilan aloqa o‘rnatish va mahsulot yoki xizmatlarni reklama qilish strategiyasidir.",
  },
  {
    id: 13,
    name: "Interyer Dizayn",
    duration: "6 oy",
    image: Inter,
    description:
      "Interyer dizayn — bu bino ichki makonlarini estetik va funksional jihatdan qulay qilish san’ati. Dizaynerlar rang, yorug‘lik, mebel va dekor elementlarini uyg‘unlashtirib, qulay va jozibali muhit yaratadilar.",
  },
];

export default function Card() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="pt-32 px-5 sm:px-10 md:px-20 lg:px-56">
        <Carousel className="h-[550px]">
          <CarouselContent className="flex flex-col md:flex-row gap-5 h-full">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={`basis-full ${
                  index === currentIndex ? "block" : "hidden"
                } h-full`}
              >
                <div className="w-full h-full flex justify-between flex-row-reverse relative">
                  <Image
                    src={item.img}
                    alt="Kurs rasmi"
                    width={item.width}
                    height={item.height}
                    className="rounded-lg hidden md:block w-full h-auto"
                  />
                  <div className="flex-col gap-9">
                    <h1 className="text-5xl font-bold leading-14 max-md:text-3xl">
                      <span className="bg-red-600 text-white bg-red px-2 py-1 rounded-2xl">
                        {item.title}
                      </span>
                      {item.text}
                    </h1>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Batafsil tugmasi carouseldan tashqarida turadi */}
        </Carousel>
        <a
          href="#courses"
          className="bg-red-600 px-10 py-3 text-white font-bold w-44 rounded-lg text-xl shadow-2xl block text-center -mt-16 md:bottom-40 md:right-20"
        >
          Batafsil
        </a>
        <h1 className="text-center text-4xl font-bold mt-12 max-md:flex-none">
          IT HOUSE qanday ishlaydi?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-6">
          {[
            {
              id: 1,
              text: "O'zingizga mos kursni tanlaysiz",
              src: Choise,
              rotate: "rotate-12",
            },
            {
              id: 2,
              text: "Berilgan darslarni o'rganib, vazifalarni bajarasiz",
              src: Study,
              rotate: "",
            },
            {
              id: 3,
              text: "Kurs ohirida sertifikatga ega bo'lasiz",
              src: Certik,
              rotate: "rotate-12",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 shadow-2xl rounded-4xl mx-4 py-6 w-full h-[450px] flex flex-col justify-between"
            >
              <div className="flex gap-4 items-center px-6">
                <h1 className="bg-red-600 rounded-full w-10 h-10 text-white text-center px-3 py-2 font-bold">
                  {item.id}
                </h1>
                <h1 className="text-xl max-md:text-3xl font-bold">
                  {item.text}
                </h1>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <Image
                  className={`w-full h-full transition-transform duration-500 ease-in-out hover:scale-110 ${item.rotate}`}
                  src={item.src}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row px-4 md:mx-6 gap-6 justify-center mt-16 md:mt-32">
          <div className="shadow-2xl px-6 py-5 rounded-4xl w-full max-w-xs mx-auto h-36 duration-1000">
            <h1 className="text-center mt-6">Umumiy o'quvchilar soni</h1>
            <Counter target={6453} />
          </div>
          <div className="shadow-2xl px-6 py-5 rounded-4xl w-full max-w-xs mx-auto h-36">
            <h1 className="text-center mt-6">Yozilgan darslar soni</h1>
            <Counter target={245} />
          </div>
          <div className="shadow-2xl px-6 py-5 rounded-4xl w-full max-w-xs mx-auto h-36">
            <h1 className="text-center mt-6">O'rtacha jamoaviy tajriba</h1>
            <Counter target={5} suffix=" yil" />
          </div>
        </div>

        <div id="mentors" className="mt-12 mb-12 bg-gray-100 w-full h-12"></div>
        <div className="w-full flex flex-col items-center max-md:hidden">
          <h1 className="text-4xl font-bold">Bizning Jamoa</h1>
          <div className="">
            <Teachers />
          </div>
        </div>

        <div id="courses" className="mt-12 mb-12 bg-gray-100 w-full h-12"></div>
        <h1 className="text-4xl font-bold">Kurslar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white relative shadow-2xl rounded-2xl px-6 py-3 hover:shadow-xl transition-all"
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between text-lg font-bold">
                <Image
                  className="w-28 h-28 mx-auto"
                  src={course.image}
                  alt={course.name}
                />
                <div className="max-md:mt-3">
                  <h1 className="text-center">{course.name}</h1>
                  <h1>{course.duration}</h1>
                </div>
              </div>
              <div>
                <PiCursorFill className="text-red-600 text-2xl ml-64 rotate-12 max-md:ml-72" />
              </div>
              {/* Modal */}
              {hovered === course.id && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-3 rounded-b-2xl text-sm transition-all">
                  {course.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-20 max-md:hidden">
          Nima uchun "IT HOUSE" da o'qish kerak?
        </h1>
        <div className="flex items-center justify-between mt-9 gap-3 max-md:flex-col max-md:mt-32">
          <div className="bg-white shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={TypePerson}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Bepul Coworking</h1>
            <h1 className="text-gray-400">
              24/7 formatida tun-u kun ishlaydigan bepul coworking va wifi.
            </h1>
          </div>
          <div className="bg-white shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Cap}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Sifatli ta'lim</h1>
            <h1 className="text-gray-400">
              Doimiy yangilanib boradigan kurslar va katta tajribaga ega
              ustozlar.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 gap-3 max-md:flex-col">
          <div className="bg-white shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Prize}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Doimiy musobaqalar</h1>
            <h1 className="text-gray-400">
              Zakovat, Futbol va boshqa o'yinlar bo'yicha haftalik sovrinli
              musobaqalar.
            </h1>
          </div>
          <div className="bg-white shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Coins}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Coin tizimi</h1>
            <h1 className="text-gray-400">
              "IT HOUSE" barcha o'quvchilari uchun coin tizimi mavjud
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 gap-3 max-md:flex-col">
          <div className="bg-white shadow-2xl w-[520px] h-40 max-md:h-full pl-6 pr-10 pt-4 pb-10 max-md:pb-3 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Tasks}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Amaliyotga taklif qilish</h1>
            <h1 className="text-gray-400">
              “IT HOUSE” intensiv kurslarni muvaffaqiyatli bitirgan
              o‘quvchilarga amaliyot taklif qilish kafolatini beradi.
            </h1>
          </div>
          <div className="bg-white shadow-2xl w-[520px] h-40 max-md:h-full pl-6 pr-10 pt-4 pb-10 max-md:pb-3 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Certificate}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Sertifikat</h1>
            <h1 className="text-gray-400">
              Kursni muvaffaqiyatli tamomlagan o‘quvchilar “IT HOUSE" diplomi va
              sertifikatiga ega bo‘ladi.
            </h1>
          </div>
        </div>

        <h1
          id="#3"
          className="text-4xl font-bold text-center mt-8 max-md:hidden"
        >
          "IT HOUSE" o'quv markazi bitiruvchilari
        </h1>
        <div className="flex justify-center items-center mt-10 max-md:hidden">
          <iframe
            width="645"
            height="400"
            src="https://www.youtube.com/embed/TBlDJTgiFZU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-4xl font-bold text-center mt-16 max-md:hidden">
          <span className="text-red-600">IT HOUSE</span> - KELAJAK SHU YERDA
        </h1>
      </div>
      <Contact />
    </div>
  );
}
